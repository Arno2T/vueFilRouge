<template>
    <main id='collection'>

        <poster v-for="(movie,i) in moviesState.movies" :key="i" :movie="movie" ></poster>
        <modal v-if="moviesState.selectedMovie"></modal>

    </main>
</template>
<script>
import Poster from './Poster.vue'
import Modal from './Modal.vue'
import {moviesState} from '../states/movies-states.js'

export default {
  name: 'collection',
  components: {
    'poster': Poster,
    'modal': Modal
  },
  data () {
    return {
      moviesState // on aurait pu écrire en ES5: moviesState: moviesState. Mais comme on a deux fois le même nom, ES6 autorise cette notation.
    }
  },
  async created () {
    const response = await fetch('http://localhost:5000/data')
    const results = await response.json()
    this.moviesState.movies = results
  },
  methods: {
    boucle () {
      return [...this.movies, ...this.movies]
    },
    elementCollection () {
      let grid = document.getElementById('collection')
      console.log(grid)
    }

  }
}

//     selectMovie(movie){
//     this.selectedMovie = movie
//   },
//   closeModal(){
//     this.selectedMovie= null
//   },
//   data () {
//     return {
//       movies: [
//         {title: 'Les Indestructibles', url: 'assets/indestructible.jpg', autre: 'affiche des indestructibles'},
//         {title: 'Jurassikk World', url: 'assets/jurassik.jpg', autre: 'affiche de Jurassik World'},
//         {title: 'Skycrapper', url: 'assets/sky.jpg', autre: 'affiche de Jurassik World'},
//         {title: 'Sar Wars', url: 'assets/starwars.jpg', autre: 'affiche de Jurassik World'},
//       ]
//     }
//   }
</script>

<style>
main {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
}
</style>
