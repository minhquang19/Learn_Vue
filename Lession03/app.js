const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      step: 0,
    };
  },
  methods: {
    add() {
      this.counter = this.counter + this.step;
    },
    reduce() {
      this.counter = this.counter - this.step;
    },
    setStep(event) {
      if (event.target.value) {
        this.step = parseInt(event.target.value);
      } else {
        this.step = 0;
      }
       
    }
  }
});

app.mount('#events');
