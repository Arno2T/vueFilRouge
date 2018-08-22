<template>
  <div id="app" :focused="isFocused()">
    <header-movies title="Movies"></header-movies>
     <p> 
         <router-link to="/addMovie" id="addMovie">Ajouter un film</router-link>
        </p>
    <loader v-if="moviesState.loaded"></loader>
   <router-view></router-view>
  </div>
</template>

<script>
import HeaderMovies from './components/HeaderMovies.vue'
import Collection from './components/Collection.vue'
import Loader from './components/Loader.vue'
import {moviesState} from './states/movies-states.js'
import Form from './components/Form.vue'


export default {
  name: 'app',
  components: {
    'header-movies': HeaderMovies,
    'collection': Collection,
    'loader': Loader
  },
  data () {
    return {
      moviesState
    }
  },
  methods: {
    isFocused () {
      console.log(document.activeElement.tagName)
    }
  }

}

</script>

<style lang="less">
@import '~normalize.css';
@import './assets/variables.less';

#app {
 font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #17181b;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  flex-grow: 1;
  position: relative;

}

</style>
