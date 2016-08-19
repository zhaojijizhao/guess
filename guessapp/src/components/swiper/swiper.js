'use strict';
require('./swiper.scss');
var Hammer = require('hammerjs');

const TRANSFORM = '-webkit-transform .3s ease-out';
const INTERVAL = 3000;

Vue.component('swiper-item', {
  props: ['order'],
  template: `
  <div class="dp-swiper-slide" :style="{order: order}"><slot></slot></div>
  `,

  ready() {
    this.$parent._build();
  },

  beforeDestroy() {
    var $parent = this.$parent;
    this.$nextTick(() => {
      $parent._build();
    })
  }
});

function reorder(array, order0Index) {
  var length = array.length;
  for (var order = 0; order < length; ++order) {
    array[(order0Index + order) % length].order = order;
  }
}

Vue.component('swiper', {
  props: {
  },

  data() {
    return {
      tx: 0,
      txUnit: '%',
      ts: 'none',
      pages: [],
      rebuiltCount: 0
    }
  },

  computed: {
    wrapperStyle() {
      return {
        transition: this.ts,
        transform: `translate(${this.tx}${this.txUnit})`
      }
    },

    slides() {
      this.rebuiltCount;
      return this.$children.filter(c => c.constructor.name === 'SwiperItem');
    }
  },

  template: `
  <div class="dp-swiper-container">
    <div v-el:wrapper class="dp-swiper-wrapper" :style="wrapperStyle">
      <slot></slot>
    </div>

    <div class="dp-swiper-pagination">
      <span v-for="page in pages" class="dp-swiper-pagination__bullet" :class="{'dp-swiper-pagination__bullet--active': page.active}"></span>
    </div>
  </div>
  `,

  methods: {
    /*
     * > 2 Slides
     * order: 0 left
     * order: 1 middle (visible)
     * order: 2 right
     * initial transform: -100%
     *
     * = 2 Slides
     * order: 0 visible
     * order: 1 right
     * initial transform: 0%
     */
    transitionEnd() {
      this._mc.set({enable: true});
      this.ts = 'none';
      // Update Orders
      if (this.slides.length > 2 || this.tx === -100) {
        var order0Index = this.slides.findIndex(s => s.order === 0);
        var length = this.slides.length;
        var newOrder0Index;
        if (this.tx === -200) { // Swipe Left
          newOrder0Index = (order0Index + 1) % length;
        } else { // Swipe Right
          newOrder0Index = (order0Index - 1 + length) % length;
        }
        reorder(this.slides, newOrder0Index);
      }

      // Update Page Indicator
      var activeIndex = this.pages.findIndex(p => p.active);
      var nextActiveIndex = (this.tx === -200 ? (activeIndex + 1) : (activeIndex + this.pages.length - 1)) % this.pages.length;
      for (var i = 0; i < nextActiveIndex; ++i)
        this.pages[i].active = false;
      this.pages[nextActiveIndex].active = true;
      for (let i = nextActiveIndex + 1; i < this.pages.length; ++i)
        this.pages[i].active = false;

      // Restore transform
      this.tx = this.slides.length !== 2 ? -100 : 0;

      // Prepare next
      this._clearTimeout();
      this._setTimeout();
    },

    _clearTimeout() {
      if (this._timeout) {
        clearTimeout(this._timeout);
      }
    },

    _setTimeout() {
      this._timeout = setTimeout(() => {
        this._mc.set({enable: false});
        this.ts = TRANSFORM;
        this.tx = this.slides.length !== 2 ? -200 : -100;
        this.txUnit = '%';
      }, INTERVAL);
    },

    _clean() {
      this.$els.wrapper.removeEventListener('webkitTransitionEnd', this._listener);
      this._clearTimeout();
      if (this._mc)
        this._mc.destroy();
    },

    _build() {
      // 1. Cleanup
      this.rebuiltCount++;
      this._clean();
      if (this.slides.length < 2) {
        this.pages = [];
        return;
      }

      // 2. Initialize slides and pages structure
      if (this.slides.length === 2)
        reorder(this.slides, 0);
      else
        reorder(this.slides, this.slides.length - 1);
      this.pages = this.slides.map(b => {
        return {active: false};
      });
      this.pages[0].active = true;

      this.tx = this.slides.length !== 2 ? -100 : 0;
      this._setTimeout();
      this._listener = this.transitionEnd.bind(this);
      this.$els.wrapper.addEventListener('webkitTransitionEnd', this._listener);

      // 3. Handle Guesture
      var mc = new Hammer.Manager(this.$els.wrapper);
      mc.add(new Hammer.Swipe({direction: Hammer.DIRECTION_HORIZONTAL, threshold: 10}));
      mc.on('swipeleft', e => {
        this.ts = TRANSFORM;
        this.tx = this.slides.length !== 2 ? -200 : -100;
        this.txUnit = '%';
      });

      mc.on('swiperight', e => {
        if (this.slides.length === 2) {
          this.ts = 'none';
          this.tx = -100;
          var order0Index = this.slides.findIndex(s => s.order === 0);
          reorder(this.slides, order0Index === 0 ? 1 : 0);
          requestAnimationFrame(() => {
            this.ts = TRANSFORM;
            this.tx = 0;
          });
        } else {
          this.ts = TRANSFORM;
          this.tx = 0;
          this.txUnit = '%';
        }
      });

      this._mc = mc;
    }
  },

  ready() {
    //this._build();
  },

  beforeDestroy() {
    this._clean();
  }
});