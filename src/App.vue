<template>
  <div id="app">
    <header-movies title="Movies"></header-movies>
    <collection>

    </collection>
  </div>
</template>

<script>
import HeaderMovies from './components/HeaderMovies.vue'
import Collection from './components/Collection.vue'

export default {
  name: 'app',
  components: {
    'header-movies': HeaderMovies,
    'collection': Collection
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

}
</style>
