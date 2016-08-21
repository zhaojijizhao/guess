'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var About = Vue.extend({
  template: require('./sign.html'),

  data() {
    return {
      name: '',
      password: '',
      check: ''
    }
  },
  methods: {
    confirm() {
      if (!this.name) {
        Toast.show('请输入用户名');
        return;
      }
      if (!this.password) {
        Toast.show('请输入密码');
        return;
      }
      if (this.password != this.check) {
        Toast.show('请确认两次密码一致');
        return;
      }
      Toast.show('注册成功');
      let _this = this;
      setTimeout(function() {
        _this.$router.go('/index/solo');
      }, 2000);
    }
  },
  ready() {
  }
});

module.exports = About;