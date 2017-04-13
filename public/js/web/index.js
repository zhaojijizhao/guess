require(['/js/public/base.js'],function(Base){
  Base.setRequirejs();
  require(['jquery','underscore','vue','vuerouter','helper',
          '/js/web/layout.js',
          '/js/web/guess.js'],
    function($,_,Vue,VueRouter,Helper,
             layout,
             guess){

      Vue.use(VueRouter);
      var routes = [
          {
            path:'/index', component: layout,
            children: [
              { path:'guess', component: guess},
              { path:'', redirect: 'guess' }
            ]
          },
          { path:'/', redirect: '/index' }
        ];
      var router = new VueRouter({routes});

      var app = new Vue({
        router
      }).$mount('#app');

  });
});