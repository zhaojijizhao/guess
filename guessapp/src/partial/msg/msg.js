'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var Msg = require('../../mock/msg')

var About = Vue.extend({
  template: require('./msg.html'),

  data() {
    return {
      msgs: Msg
    }
  },
  methods: {
  },
  ready() {
  }
});

module.exports = About;