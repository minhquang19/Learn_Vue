const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'Quang',
                    name: 'Doan Minh Quang',
                    phone: '0389769239',
                    email: 'quangdm@gmail'
                },
                {
                    id: 'Quyen',
                    name: 'Vu Van Quyen',
                    phone: '0389769239',
                    email: 'quyenvv@gmail'
                }
            ]
        }
    },
    methods: {
        
    },
})
app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" ::key="friend.id">
          <h2>{{ friend.name }}</h2>
          <button @click="toogleDetails()">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
    data() {
        return {
            detailsAreVisible : false,
            friends: [
                {
                    id: 'Quang',
                    name: 'Doan Minh Quang',
                    phone: '0389769239',
                    email: 'quangdm@gmail'
                },
               
            ]
        }
    },
    methods: {
        toogleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});
app.mount('#app');