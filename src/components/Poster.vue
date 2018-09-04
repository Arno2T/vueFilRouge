<template>
    <figure @click="selectMovie()">
        <img :src="getImgUrl()" :alt="movie.autre" />
        <figcaption id="posterTitle">{{movie.title}}</figcaption>
    </figure>
</template>

<script>
import {moviesState} from '../states/movies-states'
export default {
  props: {
    movie: {type: Object, required: true}
  },
  data () {
    return {
      moviesState
    }
  },
  methods: {
    getImgUrl () {
      return this.movie.url
    },
    async selectMovie () {
      this.moviesState.loaded = true
      const response = await fetch(`http://localhost:5000/movie/${this.movie._id}`)
      const results = await response.json()
      this.moviesState.selectedMovie = results
      console.log('selected', this.moviesState.selectedMovie)
      this.moviesState.loaded = false
    }

  }

}
</script>

<style lang="less">
@import '../assets/variables.less' ;

figcaption{
   margin-top: 10px;
   text-align: center;
   font-weight: bold;
}
#posterTitle{
  width: 200px;
  white-space: nowrap;
  overflow: hidden; 
  text-overflow: ellipsis;
}
img{
    width: 160px;
    height: 213px;
    transition: transform 1s;
    border-radius: 3px;
    box-shadow: 0 0 5px 5px black;

    &:hover{
        border: 3px solid @blue-light;
        transform: scale(1.4,1.4);
    }

}

</style>
