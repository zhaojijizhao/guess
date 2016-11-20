require(['/js/public/base.js'],function(Base){
  Base.setRequirejs();
  require(['jquery','underscore','vue','vuerouter','helper',
          '/js/h5/main.js',
          '/js/h5/sign.js',
          '/js/h5/login.js',
          '/js/h5/personal.js',
          '/js/h5/guessmenu.js',
          '/js/h5/guesslist.js',
          '/js/h5/guessdetail.js',
          '/js/h5/shopmenu.js'],
    function($,_,Vue,VueRouter,Helper,
             main,
             sign,
             login,
             personal,
             guessmenu,
             guesslist,
             guessdetail,
             shopmenu){

      Vue.use(VueRouter);
      var routes = [
          { path:'/main', component: main},
          { path:'/sign', component: sign},
          { path:'/login', component: login},
          { path:'/personal', component: personal},
          { path:'/guessmenu', component: guessmenu},
          { path:'/guesslist', component: guesslist},
          { path:'/guessdetail', component: guessdetail},
          { path:'/shopmenu', component: shopmenu},
          { path:'/', redirect: '/main' }
        ];
      var router = new VueRouter({routes});

      var app = new Vue({
        router
      }).$mount('#app');

  });
});