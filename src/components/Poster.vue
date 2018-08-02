<template>
    <figure @click="$emit('clickOnMovie', movie)">
        <img :src="getImgUrl()" :alt="movie.autre" />
        <figcaption>{{movie.title}}</figcaption>
    </figure>
</template>

<script>
export default {
  props: {
   movie: {type:Object, required:true},
   selectMovie: Function
  },
  methods: {
      getImgUrl(){
           return `assets/img/${this.movie.url}`
       },
  }


}
</script>

<style lang="less">
@import '../assets/variables.less' ;

figcaption{
   margin-top: 10px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: clip ellipsis;
   text-align: center;
   font-weight: bold;
}
img{
    transition: transform 1s;
    border-radius: 3px;
    box-shadow: 0 0 5px 5px black;

    &:hover{
        border: 3px solid @blue-light;
        transform: scale(1.4,1.4);
    }

}

</style>
