'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var Users = require('../../mock/users');

const defaultOption = {
  name: '',
  hilight: false
};

var About = Vue.extend({
  template: require('./duomap.html'),

  data() {
    return {
      users: Users,
      choosed: [],
      options: [
        {
          name: '',
          hilight: false
        }
      ],
      maskShow: false,
      slide: '',
      result: ''
    }
  },
  methods: {
    reset() {
      let option = Object.assign({}, defaultOption);
      this.options = [option];
    },
    add() {
      let option = Object.assign({}, defaultOption);
      this.options.push(option);
    },
    start() {
      if (this.options.length <= 1) {
        alert('请填写至少两个选项');
        return false;
      }
      Toast.show('发送成功');
      let _this = this;
      setTimeout(function() {
        _this.$router.go('/index/solo');
      }, 2000);
    }
  },
  ready() {
    window.init();
  }
});

module.exports = About;