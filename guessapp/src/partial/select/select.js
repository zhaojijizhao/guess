'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');
var Options = require('../../mock/options');
var Select = require('../../mock/select');

var About = Vue.extend({
  template: require('./select.html'),

  data() {
    return {
      options: Options,
      select: Select
    }
  },
  methods: {
  },
  ready() {
  }
});

module.exports = About;