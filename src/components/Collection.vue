<template>
    <main id='collection'>
        
        <poster v-for="(movie,index) in boucle()" :key=index :url="getImgUrl(movie)" :autre="movie.autre" :title="movie.title"  ></poster>

    </main>
</template>
<script>
import Poster from './Poster.vue'
export default {
  name: 'collection',
  components: {
    'poster': Poster
  },
  data: function(){
      return {
          movies: null
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
       getImgUrl(movie){
           return `assets/'${movie.url}`
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
