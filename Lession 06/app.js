const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
    beforeCreate() {
      console.log('BeforCreate');
    },
  },
});
app.mount('#app');
const data = {
  message : 'hello',
  longMessage : 'Hello ! World!'
}
const handler = {
  set(target,key,value) {
    if (key == 'message') {
      target.longMessage = value + 'World '
    }
    target.message = value;
  }
}
const proxy = new Proxy(data, handler);

proxy.message = 'Hello 123';

console.log(proxy.longMessage);

