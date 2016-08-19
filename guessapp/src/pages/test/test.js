'use strict';
require('@component/pullrefresh/pull-refresh');
require('@component/swiper/swiper');
require('./test.scss');
var queryString = require('query-string');
var range = require('lodash/range');

var {utils, api} = require('@common');
require('@component/flexgrid/flex-grid');

// reqwest('/api/hello').then(function (resp) {
//   console.log('AJAX', resp);
//   // setTimeout(a => {
//   //   var head = document.getElementsByTagName('head')[0];
//   //   var script = document.createElement('script');
//   //   script.type = 'text/javascript';
//   //   script.charset = 'utf-8';
//   //   script.async = true;
//   //   script.src = 'https://www.google.com/xjs/_/js/sdch=d/k=xjs.s.zh_CN.b4mFbpNvW4I.O/m=sx,c,sb,cdos,cr,elog,jsa,r,hsm,qsm,j,d,csi/am=AJQ0C4ZE_D8EhFsIFqQGDIwC/rt=j/d=1/t=zcms/rs=ACT90oEPwy3Z6bLEi3WHP0RnALmVKYTrRg';
//   //   head.appendChild(script);
//   // }, 5000);
//
// });

api.get('osdeal/order/review/init').then(resp => {
  console.log(resp);
}, e => {
  console.error(e);
});

api.post('osdeal/order/review/init', queryString.stringify({fuck: 1, love: 2})).then(resp => {
  console.log(resp);
}, e => {
  console.error(e);
});


var RootComponent = Vue.extend({
  template: require('./test.html'),
  data() {
    return {
      items: [{text: 'Item 1'}, {text: 'Item 2'}, {text: 'Item 3'}],
      swiperData: [
        {link: 'Aha1'}, {link: 'Aha2'}, {link: 'Aha3'}
      ],
      nums: range(0, 100)
    }
  },
  methods: {
    showUA() {
      this.items = [{text: 'Item 4'}, {text: 'Item 5'}];
      // var queryString = require('query-string');
      // console.log('Query', queryString.parse(location.search));
      // KNB.use('getUA', {
      //   success: function(ua) {
      //     alert(JSON.stringify(ua));
      //   }
      // });
    },

    onRefresh(e) {
      e.promise = new Promise((resolve, reject) => {
        setTimeout(__ => {
          resolve();
        }, 2000);
      });
    },

    onTouchEnd(e) {
      console.log(e);
    }
  },
  
  computed: {
  },
  
  ready() {
    console.log('ready');
    // setTimeout(__ => {
    //   this.swiperData = [
    //     {link: 'Aha1'}, {link: 'Aha2'}
    //   ]
    // }, 5000);
  }
});

new RootComponent({ el: '#app' });



