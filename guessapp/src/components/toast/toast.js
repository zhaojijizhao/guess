require('./toast.scss');

var ToastComp = {
  data() {
    return {
      content: ''
    }
  },
  template: `
  <div class="toast-container" transition="toast-anim">
    <div class="content">{{content}}</div>
  </div>
  `
};

class Toast {
  show(msg) {
    var comp = new Vue(ToastComp);
    comp.content = msg;
    comp.$mount().$appendTo('body');
    setTimeout(() => {
      comp.$destroy(true);
    }, 2000);
  }
}

module.exports = new Toast();