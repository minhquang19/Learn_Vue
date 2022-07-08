const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmName: '',
      fullname: '',
      lastName: ''
    };
  },
  watch: {
    name(value) {
      this.fullname = value === '' ? '' : value + ' ' + this.lastName;
    },
    lastName(value) {
      this.fullname = value === '' ? '' : this.name + ' ' + value;
    },
  },
  computed: {
    // fullname() {
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + this.fullname; 
    // }
  },
  methods: {
    submit() {
      alert('Submited!!');
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '',
      this.lastName = ''
    },
    confirmInput() {
      this.confirmName = this.name
    },
  }
});

app.mount('#events');