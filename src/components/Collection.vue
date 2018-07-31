<template>
    <main id='collection'>
        
        <poster v-for="movie in movies" :key="movie" :movie="movie" :selectMovie="selectMovie" ></poster>
        <modal v-if="selectedMovie" :movie="selectedMovie"></modal>

    </main>
</template>
<script>
import Poster from './Poster.vue'
import Modal from './Modal.vue'

export default {
  name: 'collection',
  components: {
    'poster': Poster,
     'modal': Modal,
  },
  data(){
      return {
          movies: null,
         selectedMovie: null
      }
  },
   created: async function (){
       const response= await fetch('movies.json')
       const results= await response.json()
       this.movies= results
   },
   methods: {
       boucle(){
           return [...this.movies, ...this.movies] 
       },
        selectMovie(movie){
        this.selectedMovie = movie
   }
  }
}
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
  display: flex;
  flex-wrap: wrap;
  overflow: scroll;
}
</style>
