'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var About = Vue.extend({
  template: require('./duo.html'),

  data() {
    return {
      links: [
        {
          name: "地图模式",
          link: "/index/duomap",
          icon: "fa-globe"
        },
        {
          name: "好友模式",
          link: "/index/duofriend",
          icon: "fa-gift"
        },
        {
          name: "随机模式",
          link: "/index/duohot",
          icon: "fa-random"
        },
      ]
    }
  },
  methods: {
  },
  ready() {
  }
});

module.exports = About;