<template>
    <main id='collection' >
       <div id="slideLeft" :class="{slide: moviesState.selectedMovie}"  >
         <div id="truc"> <poster v-for="(movie,i) in moviesState.movies" :key="i" :movie="movie" ></poster></div>
          <modal v-if="moviesState.selectedMovie"></modal>
       </div>
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
    this.moviesState.loaded=true
    const response = await fetch('http://localhost:5000/movie/')
    const results = await response.json()
    this.moviesState.movies = results
    this.moviesState.loaded=false
  },
  methods: {
    boucle () {
      return [...this.movies, ...this.movies]
    },
    elementCollection () {
      let grid = document.getElementById('collection')
      console.log(grid)
    },
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
// //   }
</script>

<style>
main {
  height: 100vh;
  display: flex;
  overflow: scroll;

}
#truc{
  display: flex;
  width:100vw;
}
#slideLeft{
  display:flex; 
  width: 200vw; 
  transition: transform .8s linear;
}
.slide{
  transform: translate3d(-51%, 0,0);
  
}
/* .noslide{
  transform: translate3d(0,0,0);
  transition: transform .8s linear
} */

</style>
