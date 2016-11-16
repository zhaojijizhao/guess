require(['/js/public/base.js'],function(Base){
  Base.setRequirejs();
  require(['jquery','underscore','vue','vuerouter','helper',
          '/js/cms/layout.js',
          '/js/cms/manager.js',
          '/js/cms/user.js',
          '/js/cms/firsttype.js',
          '/js/cms/secondtype.js',
          '/js/cms/thirdtype.js',
          '/js/cms/question.js',
          '/js/cms/guess.js'],
    function($,_,Vue,VueRouter,Helper,
             layout,
             manager,
             user,
             firsttype,
             secondtype,
             thirdtype,
             question,
             guess){

      Vue.use(VueRouter);
      var routes = [
          { path: '/index', component: layout,
            children:[
              { path:'manager', component: manager},
              { path:'user', component: user},
              { path:'firsttype', component: firsttype},
              { path:'secondtype', component: secondtype},
              { path:'thirdtype', component: thirdtype},
              { path:'question', component: question},
              { path:'guess', component: guess},
              { path:'', redirect: 'user'}
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