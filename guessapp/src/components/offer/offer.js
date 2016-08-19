require('./offer.scss');
const cloneDeep = require('lodash/cloneDeep');

const TRANSFORM = '-webkit-transform .3s ease-out';
const INTERVAL = 2000;

Vue.component('offer', {
  props: {
    data: {}
  },

  template: `
  <div class="offer-container">
    <div v-el:wrapper class="offer-wrapper" :style="{'transition': ts, 'transform': 'translateY(' + ty + '%)'}">
      <div v-for="slide in slides" class="offer-slide">
        {{slide}}
      </div>
    </div>
  </div>
  `,
  
  data() {
    return {
      slides: [],
      ts: 'none',
      ty: 0,
    };
  },
  
  ready() {
    this._build();
  },

  beforeDestroy() {
    this._clean();
  },

  methods: {
    _transitionEnd() {
      this.ts = 'none';
      this.slides.push(this.slides.shift());
      this.ty = 0;
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
        this.ts = TRANSFORM;
        this.ty = -100;
      }, INTERVAL);
    },

    _clean() {
      this.$els.wrapper.removeEventListener('webkitTransitionEnd', this._listener);
      this._clearTimeout();
    },

    _build() {
      this._clean();
      if (this.data.length <= 1)
        return;

      this.slides = cloneDeep(this.data);
      this.ty = 0;
      this._listener = this._transitionEnd.bind(this);
      this.$els.wrapper.addEventListener('webkitTransitionEnd', this._listener);
      this._setTimeout();
    }
  },

  watch: {
    data() {
      this._build();
    }
  }
});