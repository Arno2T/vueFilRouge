<template>
    <div id="backModal">
         <h4>TiTrE</h4>
        <figure>
            <img src="assets/img/starwars.jpg" />
            <p>Synopsis</p>
            <button v-on:click="close">Close</button>
    </figure>
    </div>
</template>

<script>
export default {
    methods:{
        close(){
           return close= true
        }
    }
}
</script>


