'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var About = Vue.extend({
  template: require('./layout.html'),

  data() {
    return {
      title: "选择决策器",
      navshow: false,
      navlist: [
        {
          name: "注册",
          link: "/index/sign",
          icon: "fa-pencil"
        },
        {
          name: "登录",
          link: "/index/login",
          icon: "fa-sign-in"
        },
        {
          name: "消息列表",
          link: "/index/msg",
          icon: "fa-comments"
        },
        {
          name: "添加好友",
          link: "/index/addfriend",
          icon: "fa-search"
        },
        {
          name: "好友列表",
          link: "/index/friend",
          icon: "fa-phone"
        },
        {
          name: "单人游戏",
          link: "/index/solo",
          icon: "fa-user"
        },
        {
          name: "多人游戏",
          link: "/index/duo",
          icon: "fa-group"
        },
        {
          name: "地图配对",
          link: "/index/duomap",
          icon: "fa-globe"
        },
        {
          name: "好友配对",
          link: "/index/duofriend",
          icon: "fa-gift"
        },
        {
          name: "随机配对",
          link: "/index/duohot",
          icon: "fa-random"
        }
      ],
      btnlist: [
        {
          name: "消息",
          link: "/index/msg",
          icon: "fa-comments"
        },
        {
          name: "多人",
          link: "/index/duo",
          icon: "fa-group"
        },
        {
          name: "单人",
          link: "/index/solo",
          icon: "fa-user"
        },
        {
          name: "好友",
          link: "/index/friend",
          icon: "fa-phone"
        },
        {
          name: "我",
          link: "/index/profile",
          icon: "fa-book"
        }
      ]
    }
  },
  methods: {
    back() {
      history.back();
    },
    shownav(event) {
      event.stopPropagation();
      this.navshow = true;
    },
    reset() {
      this.navshow = false;
    },
    hidenav() {
      event.stopPropagation();
      this.navshow = false;
    }
  },
  ready() {
  },
  computed: {
  }
});

module.exports = About;