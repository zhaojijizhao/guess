/**
 * Flex Grid - Fixed & Responsive Grid using flexbox
 *
 * @columns column count, if not given, it's totally flexible
 *
 */
require('./flex-grid.scss');
Vue.component('flex-grid', {
  props: {
    columns: Number
  },
  data() {
    return {
      dividers: [],
      placeholders: []
    }
  },
  template: `
  <section class="flex-grid">
    <slot></slot>
    <div v-for="divider in dividers" style="width: 100%" :style="{order: divider.order}"></div>
    <div class="flex-item" v-for="placeholder in placeholders" style="height: 0;" :style="{order: placeholder.order}"></div>
  </section>
  `,

  ready() {
    var itemCount = this.$children.length;
    var order = 0;
    for (let i = 0; i < itemCount; ++i) {
      this.$children[i].order = order;
      order++;
      if (this.columns && (order - this.columns) % (this.columns + 1) === 0) {
        this.dividers.push({order: order});
        order++;
      }
    }

    if (this.columns) {
      if (itemCount % this.columns !== 0)
        for (let i = 0; i < this.columns - itemCount % this.columns; ++i) {
          this.placeholders.push({order: order});
          order++;
        }
    } else {
      for (let i = 0; i < 20; ++i) {
        this.placeholders.push({order: order});
        order++;
      }
    }
  }
});

Vue.component('flex-item', {
  props: ['order'],
  template: `
  <div class="flex-item" :style="{order: order}"><slot></slot></div>
  `
});