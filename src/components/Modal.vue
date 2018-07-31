<template>
    <div id="backModal">
         <h4>{{ movie.title }}</h4>
        <figure>
            <img :src="getImgUrl()" />
            <p>{{ movie.synopsis }}</p>
            <button v-on:click="close">Close</button>
    </figure>
    </div>
</template>

<script>
export default {
    props:{
        movie:{type: Object, required:true}
    },
    methods:{
        close(){
           return close= true
        },
         getImgUrl(){
           return `assets/img/${this.movie.url}`
       },
    }
}
</script>


