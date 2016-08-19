require('./loading.scss');

var LoadingComp = {
  data() {
    return {
      content: '数据加载中'
    }
  },
  template: `
  <div class="dp-loading-container">
    <div class="dp-loading-box">
      <div class="dp-loading">
          <div class="dp-loading-leaf dp-loading-leaf-0"></div>
          <div class="dp-loading-leaf dp-loading-leaf-1"></div>
          <div class="dp-loading-leaf dp-loading-leaf-2"></div>
          <div class="dp-loading-leaf dp-loading-leaf-3"></div>
          <div class="dp-loading-leaf dp-loading-leaf-4"></div>
          <div class="dp-loading-leaf dp-loading-leaf-5"></div>
          <div class="dp-loading-leaf dp-loading-leaf-6"></div>
          <div class="dp-loading-leaf dp-loading-leaf-7"></div>
          <div class="dp-loading-leaf dp-loading-leaf-8"></div>
          <div class="dp-loading-leaf dp-loading-leaf-9"></div>
          <div class="dp-loading-leaf dp-loading-leaf-10"></div>
          <div class="dp-loading-leaf dp-loading-leaf-11"></div>
      </div>
      <p class="dp-loading-content">{{content}}</p>
    </div>
  </div>
  `
};

class Loading {
  constructor() {
    this.comp = null;
  }

  show(msg) {
    this.comp = new Vue(LoadingComp);
    this.comp.content = msg;
    this.comp.$mount().$appendTo('body');
  }

  hide() {
    if (this.comp)
      this.comp.$destroy(true);
  }
}

module.exports = new Loading();