const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredValue : '', 
    };
  },
  methods : {
    addGoals() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
});

app.mount('#user-goals');
