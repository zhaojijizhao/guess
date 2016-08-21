'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

const defaultOption = {
  name: '',
  hilight: false
};

var Solo = Vue.extend({
  template: require('./solo.html'),

  data() {
    return {
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
      this.roll();
    },
    roll() {
      let _this = this;
      let options = _this.options;

      _this.maskShow = true;
      let result = parseInt(Math.random() * options.length + 1, 10);
      let i = 0;
      let t = 0;
      _this.result = options[result - 1].name;

      let finishRoll = () => {
        _this.maskShow = false;
      }
      let dealTurn = () => {
        options.forEach((v, k) => {v.hilight = false});
        options[i].hilight = true;
        _this.slide = options[i].name;
      }

      let inter = setInterval(function() {
        dealTurn();
        i++;
        if (i == options.length) {
          i = 0;
          t++;
          if (t == 3) {
            clearInterval(inter);
          }
        }
      }, 300);

      setTimeout(function() {
        let i = 0;
        let last = setInterval(function() {
          if (i == result - 1) {
            clearInterval(last);
            finishRoll();
          }
          dealTurn();
          i++;
        }, 800);
      }, options.length * 300 * 3);
    }
  },
  ready() {
  }
});

module.exports = Solo;