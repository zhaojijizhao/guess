'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var About = Vue.extend({
  template: require('./layout.html'),

  data() {
    return {
      options:[
        ""
      ]
    }
  },
  methods: {
  },
  ready() {
  }
});

module.exports = About;