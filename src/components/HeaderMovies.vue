<template>
    <header>
        <h1>{{ title }}</h1>
        <p> 
         <router-link to="/addMovie" id="addMovie">Ajouter un film</router-link>
         <router-view></router-view>
        </p>
    </header>
</template>

<script>
import Form from './Form.vue'
export default {
    components:{
        'form-movie': Form ,
    },

  props: {
    title: {type: String, required: true}
  }
}
</script>

<style>
    h1{
        font-size: 40px;
    }
    a{
  color: white;
  text-decoration: none;
  
}
</style>