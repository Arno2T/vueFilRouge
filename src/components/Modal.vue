<template>
    <div id="backModal">
        <figure>
             <h4>{{ movie.title }}</h4>
            <div id="boxModal">
                <img :src="getImgUrl()" />
                <p>{{ movie.synopsis }}</p>
            </div>
            <button @click="$emit('closeModal')">Close</button>
    </figure>
    </div>
</template>

<script>
export default {
    props:{
        movie:{type: Object, required:true},
        closeModal: Function,
    },
    methods:{
         getImgUrl(){
           return `assets/img/${this.movie.url}`
       },
    }
}
</script>

<style lang="less">
#backModal{
    background-color: rgba(0,0,0,.5);
    position: absolute;
    top: 0;
    height: 100vh;
    }

#backModal figure{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, .8);
    width: 50%;
    border-radius: 5px;
    box-shadow: 0 0 5px 5px white;
    margin-left: 20%;  
}

#boxModal{
    display: flex;
    text-align: justify;
}
#boxModal h4{
    font-size: 30px;
}

#boxModal img{
    margin-right: 7px;
    box-shadow: none;
    &:hover{
    transform: none;
    border:none;
    }
}
button{
    border:none;
    background-color: #2b71b8;
}
</style>



