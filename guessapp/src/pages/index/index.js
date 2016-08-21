'use strict';
require('./index.scss');

var VueRouter = require('vue-router');

//框架
var Layout = require('@partial/layout/layout');

//商品页面
var Sign = require('@partial/sign/sign');
var Login = require('@partial/login/login');
var Profile = require('@partial/profile/profile');
var Friend = require('@partial/friend/friend');
var Addfriend = require('@partial/addfriend/addfriend');
var Solo = require('@partial/solo/solo');
var Duo = require('@partial/duo/duo');
var Duomap = require('@partial/duomap/duomap');
var Duofriend = require('@partial/duofriend/duofriend');
var Duohot = require('@partial/duohot/duohot');
var Msg = require('@partial/msg/msg');
var Select = require('@partial/select/select');

Vue.use(VueRouter);

var RootComponent = Vue.extend({
  template: require('./index.html'),
  data() {
    return {}
  },
  methods: {
  },
  computed: {
  },
  ready() {
  }
});

var router = new VueRouter();
router.map({
  '/index': {
    component: Layout,
    subRoutes: {
      '/sign': {
        component: Sign//注册
      },
      '/login': {
        component: Login//登录
      },
      '/profile': {
        component: Profile//个人资料
      },
      '/friend': {
        component: Friend//好友列表
      },
      '/addfriend': {
        component: Addfriend//添加好友
      },
      '/solo': {
        component: Solo//单人模式
      },
      '/duo': {
        component: Duo//多人模式选择
      },
      '/duomap': {
        component: Duomap//多人地图
      },
      '/duofriend': {
        component: Duofriend//多人好友
      },
      '/duohot': {
        component: Duohot//多人热度
      },
      '/msg': {
        component: Msg//我的消息
      },
      '/select/:id': {
        component: Select//选项详情
      }
    }
  }
});

router.redirect({
  '*': '/index/solo'
})

router.start(RootComponent, '#app');
