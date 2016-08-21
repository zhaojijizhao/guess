'use strict';
var fs = require('fs');
var path = require('path');
var url = require('url');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var multer  = require('multer');
var mime = require('mime-types');
var glob = require('glob');
var dnsSync = require('dns-sync');
var child_process = require('child_process');
var thematic = require('sass-thematic');

var CI = require('./webpack');
var STATIC_SRC = CI['static-src'];
var DIST_PATH = CI.dist;
var ENV = CI.env;
var VERSION = `${require('./package.json').version}@${child_process.execSync('git rev-parse --short HEAD').toString().trim('\n')}`;
var URL_PREFIX = CI.urlPrefix;
var DEV_SERVER_PORT = 5001;
var pageSrcBase = path.join(__dirname, '/src/pages');
console.log('CI', CI);

var config = {
  entry: {
    common: ['vue', 'query-string',
             'fastclick', 'reqwest', 'normalize.css', './src/common']
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, DIST_PATH, STATIC_SRC),
    publicPath: '/' + STATIC_SRC + '/',
    chunkFilename: '[name].[chunkhash].js',
  },
  resolve: {
    modulesDirectories: ['vendor', 'node_modules'],
    alias: {
      '@common': path.resolve(__dirname, './src/common'),
      '@component': path.resolve(__dirname, './src/components'),
      '@mock': path.resolve(__dirname, './src/mock'),
      '@partial': path.resolve(__dirname, './src/partial'),
      '@module': path.resolve(__dirname, './src/module')
    }
  },
  eslint: {
    failOnError: true
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./src/common/style/dp")]
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: 'eslint-loader'}
    ],
    loaders: [
      {
        test: /\.css$/,
        //loader: 'style-loader!css-loader',
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&-autoprefixer!postcss', {publicPath: './'})
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap&-autoprefixer!postcss!resolve-url?sourceMap!sass?sourceMap', {publicPath: './'})
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|vendor)/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: ENV === 'dev' ? 'url-loader' : 'url-loader?limit=10000&name=img/[name].[hash].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: ENV === 'dev' ? 'url-loader' : 'file-loader'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: ENV === 'dev' ? 'url-loader' : 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      }
    ],

    noParse: ['hbnb']
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['iOS >= 6', 'Android >= 4.1'] })];
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: 'vue/dist/vue.common.js',
    }),
    new ExtractTextPlugin('[name].css', {
      allChunks: false,
      disable: ENV === 'dev'
    }),

    new webpack.DefinePlugin({
      '__ENV__': `'${ENV}'`,
      '__LOCAL_SERVER__': `'${dnsSync.lookup(require('os').hostname())}:${DEV_SERVER_PORT}'`,
      '__VERSION__': `${VERSION}`
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: '[name].js',
      minChunks: Infinity,
    }),

    thematic.webpack({
      varsFile: './src/common/style/mt/_var.scss',
      includePaths: ['./src/common/style/mt'],
      cwd: __dirname,
      output: [{
        includeFiles: ['./src/common/main.scss'].concat(glob.sync('./src/pages/**/*.scss')),
        css: {
          filename: 'theme-mt.css',
          header: '.mt {',
          footer: '}'
        }
      }]
    }),

    function() {
      this.plugin('done', function(stats) {
        if (ENV !== 'dev') {
          var mtCSS = fs.readFileSync(path.join(__dirname, DIST_PATH, STATIC_SRC, 'theme-mt.css'), {encoding: 'utf8'});
          fs.readdirSync(pageSrcBase).filter(dir => fs.statSync(path.join(pageSrcBase, dir)).isDirectory()).forEach(dir => {
            var mainCSSPath = path.join(__dirname, DIST_PATH, STATIC_SRC, dir + '.css');
            var mainCSS = fs.readFileSync(mainCSSPath, {encoding: 'utf8'});
            fs.writeFileSync(mainCSSPath, mainCSS + '\n' + mtCSS);
          });
        }
      })
    }
  ],
  devtool: '#source-map',
  devServer: {
    contentBase: DIST_PATH,
    historyApiFallback: false,
    port: DEV_SERVER_PORT,
    setup: function (app) {
      app.use(require('cors')({origin: true, credentials: true}));

      app.get('/api/hello', function (req, res, next) {
        //setTimeout(() => {
          res.send('OK');
        //}, 5000);
      });

      var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './uploads')
        },
        filename: function (req, file, cb) {
          cb(null, `${file.fieldname}.${Date.now()}.${mime.extension(file.mimetype)}`);
        }
      });
      var upload = multer({ storage: storage });
      //
      glob('./src/pages/*/mock/*.js', function(err, files) {
        if (err) {
          throw err;
        }

        files.forEach(file => {
          let mockData = require(file);
          if (mockData.fileUpload) {
            app[mockData.method.toLowerCase()](mockData.path, upload.array(mockData.fileUpload, 10), function (req, res, next) {
              console.log(req.files, req.body);
              res.send(mockData.response);
            });
          } else {
            app[mockData.method.toLowerCase()](mockData.path, function (req, res, next) {
              res.send(mockData.response);
            });
          }
        });
      });
    }
  },
};

fs.readdirSync(pageSrcBase).filter(dir => fs.statSync(path.join(pageSrcBase, dir)).isDirectory()).forEach(dir => {
  // Add entry point
  config.entry[dir] = [path.join(pageSrcBase, dir, dir + '.js')];

  // Create entry html page
  var pageConfig;
  try {
    pageConfig = require('./src/pages/' + dir + '/_config.js');
  } catch (e) {
    console.error(`请为${dir}创建_config.js页面配置文件`);
    throw e;
  }
  config.plugins.push(new HtmlWebpackPlugin({
    title: pageConfig.title,
    filename: '../' + dir + '.html',
    inject: false,
    template: 'template/' + (pageConfig.template || 'index-template.ejs'),
    chunks: [dir],
    env: ENV,
    version: VERSION
  }));
});


/**
 * Environment Specific Configuration
 */
if (ENV !== 'dev') {
  config.plugins.unshift(new CleanWebpackPlugin(['dist'], {
    root: __dirname,
    verbose: true,
    dry: false
  }));

  config.output.publicPath = url.resolve(URL_PREFIX, STATIC_SRC) + '/';
  if (ENV === 'product') {
    config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }));
  }
}

module.exports = config;