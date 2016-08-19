# peon-test
最简化的基于webpack和Vue.js的peon-static前端脚手架

环境

Node.js 4.x, 更新的版本会有问题, 主要sass编译

支持以下功能

* ES6转译
* SASS预处理
* Cortex包支持
* AutoPrefixer自动处理浏览器前缀
* 根据模版生成入口文件
* 图片处理: CSS & HTML, 对于小于10kb, 直接作为base64嵌入, 否则通过url加载
* ESLint代码静态分析
* 服务器端接口Mock

## 构建

`npm install`

`cortex install`

`npm run build`

## 调试

`npm run dev`

访问http://localhost:5002/[pageName].html

比如
* http://localhost:5002/list.html?cityId=341
* http://localhost:5002/detail.html

## 目录结构
* templates - 各类服务器端模版(入口页面)
* vendor - 没有通过npm/cortex管理的第三方代码
* src/pages - 真正的页面内容包括html/js/css
* src/common - 公共代码
* src/components - 公共组件

## 发布

不用本地构建，直接发布
1.  git commit and push

2.  CI发布(beta/peon_static)

Beta地址
* http://h5.51ping.com/app/peon-test/detail.html
* http://h5.51ping.com/app/peon-test/list.html?cityId=341

