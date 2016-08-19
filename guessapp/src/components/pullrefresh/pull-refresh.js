require('./pull-refresh.scss');
require('../loading/loading.scss');

Vue.component('pull-refresh', {
  template: `
  <div v-el:wrapper class="dp-pull-refresh">
    <div class="dp-pull-refresh__indicator">
      <div :style="pullRefreshTipStyle">
        <i class="fa" :class="[canRefresh ? 'fa-long-arrow-up' : 'fa-long-arrow-down']"></i>
      </div>
    </div>
    <div v-if="isRefreshing" :style="loadingStyle">
      <div class="dp-loading dp-loading--pull-refresh">
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
    </div>
    <div class="dp-pull-refresh__content" v-el:main  :style="mainStyle"
      @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
      <slot></slot>
    </div>
  </div>
  `,


  data() {
    return {
      translateY: 0, // the translate Y for content to show the underlying pull refresh tip
      pullEnabled: false, // allow scroll
      startY: 0, // touch start Y
      isRefreshing: false, // pull refresh is happening
      canRefresh: false //
    }
  },
  methods: {
    onTouchStart(e) {
      this.startY = e.changedTouches[0].clientY;
      if (this.$els.wrapper.scrollTop === 0) {
        this.pullEnabled = true;
      } else
        this.pullEnabled = false;
    },

    onTouchMove(e) {
      // console.log(e);
      var deltaY = e.changedTouches[0].clientY - this.startY;
      if (this.pullEnabled && !this.isRefreshing) {
        if (deltaY > 0) { // pull down
          this.translateY = deltaY / 2;
          e.preventDefault();
          e.stopPropagation();
        }
      }
    },

    onTouchEnd() {
      if (this.isRefreshing)
        return;

      if (this.pullEnabled) {
        this.isRefreshing = this.canRefresh;
        this.translateY = this.isRefreshing ? 60 : 0;
        if (this.isRefreshing) {
          var e = {};
          this.$emit('trigger-refresh', e);
          //console.log('promise', e);
          e.promise.finally(__ => {
            this.isRefreshing = false;
            this.translateY = 0;
          });
        }
      } else
        this.translateY = 0;
    }
  },

  computed: {
    mainStyle() {
      return {
        transform: `translateY(${this.translateY}px)`
      }
    },

    canRefresh() {
      return this.translateY > 50;
    },

    pullRefreshTipStyle() {
      return {
        transform: `translateY(${this.translateY - 30}px)`,
        display: this.isRefreshing ? 'none' : 'initial'
      }
    },

    loadingStyle() {
      return {
        transform: `translateY(${this.translateY - 30}px)`
      }
    }
  }

});