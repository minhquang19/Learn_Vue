const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink:'https://vuejs.org',
            result :'Loading...',
        };
    },
    methods:{
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                this.result =  [randomNumber]+' - Learn Vuejs!';
            } else {
                this.result = [randomNumber]+' - Learn PHP!';
            }
        }
    }
});

app.mount('#user-goal');