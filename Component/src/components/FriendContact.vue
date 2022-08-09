<template>
  <li>
    <h2>{{ name  }} {{ isFavorite ? '(Favorite)' : ''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite"> Favorite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name : {
      type : String,
      required : true,
    },
    phoneNumber : {
      type : String,
      required : true,
    },
    emailAddress : {
      type : String,
      required : true,
    },
    favorite : {
      type : Boolean,
      required : false,
      default : false,
      // validator : function(value) {
      //   return value === '1' || value === '0';
      // },
    }
  },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
        },
      ],
      detailsAreVisible: false,
      isFavorite : this.favorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    }
  }
};
</script>
<style>
button {
    border-radius: 5px;
    padding: 10px;
    margin-right: 5px;
}

</style>