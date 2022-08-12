<template>
    <form @submit.prevent="submitContact">
        <div>
            <label for="">Name</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label for="">Phone</label>
            <input type="tel" v-model="phone">
        </div>
        <div>
            <label for="">E-mail</label>
            <input type="email" v-model="email">
        </div>
        <button click="addContact">Add contact</button>
    </form>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            phone: '',
            email: ''
        }
    },
    methods: {
        submitContact() {
            this.$emit("add-contact",this.name, this.phone, this.email);
        }
    }
}
</script>
<style>

</style>