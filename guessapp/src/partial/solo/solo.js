'use strict';

var {reqwest, utils} = require('@common');
var Toast = require('@component/toast/toast');

var Solo = Vue.extend({
  template: require('./solo.html'),

  data() {
    return {
      options:[
        {
          name: '',
          hilight: false
        }
      ],
      defaultOption:[
        {
          name: '',
          hilight: false
        }
      ],
      maskShow: false,
      result: ''
    }
  },
  methods: {
    reset() {
      this.options = [defaultOption];
    },
    add() {
      this.options.push(defaultOption);
    },
    start() {
      if(options.length <= 1){
          alert('请填写至少两个选项');
          return false;
      }
      this.roll();
    },
    roll() {
      this.maskShow = true;
      let result = parseInt(Math.random() * this.options.length + 1,10);
      let i = 0,t = 0;

      let inter = setInterval(function(){
        this.options.forEach((v,k) => v.hilight = false);
        this.options[i].hilight = true;
        i++;
        if(i == this.options.length){
          i = 0;
          t++;
          if(t == 3){
              clearInterval(inter);
          }
        }
      },300);
      setTimeout(function(){
          let i = 0;
          let last = setInterval(function() {
            if(i == result - 1) {
              clearInterval(last);
              finishRoll();
            }
            this.options.forEach((v,k) => v.hilight = false);
            this.options[i].hilight = true;
            i++;
          }, 800);
      }, this.option.length*300*3);

      finishRoll() {
         this.result = this.options[result - 1].name;
         this.maskShow = false;
      }

    }
  },
  ready() {
  }
});

module.exports = Solo;