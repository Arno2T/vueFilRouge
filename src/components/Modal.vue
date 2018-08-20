<template>

        <figure id=modale>
             <h4>{{ moviesState.selectedMovie.title }}</h4>
            <div id="boxModal">
                <img :src="getImgUrl()" />
                <p>{{ moviesState.selectedMovie.synopsis }}</p>
            </div>
            <button @click="closeModal()">Close</button>
    </figure>

</template>

<script>
import { moviesState } from '../states/movies-states.js'
export default {
  data () {
    return {
      moviesState
    }
  },
  created () {
    document.addEventListener('keydown', this.escapeKeylistener)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.escapeKeylistener)
  },

  methods: {
    getImgUrl () {
      return this.moviesState.selectedMovie.url
    },
    closeModal () {
      this.moviesState.selectedMovie = null
    },
    escapeKeylistener (event) {
      console.log(event)
      if (event.code === 'Escape') {
        this.closeModal()
      }
    }
  }
}
</script>

<style lang="less">
// #backModal{
//     background-color: rgba(0,0,0,.5);
//     // position: absolute;
//     // top: 0;
//     //height: 100vh;
//     width: 50vw;
//      height: 100%;
//      display: flex;
//      justify-content: center;
//     }

#modale {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
  width: 52vw;
  border-radius: 5px;
  box-shadow: 0 0 5px 5px white;
  height: 50%;
}

#boxModal {
  display: flex;
  text-align: justify;
  padding-right: 9px;
  padding-left: 5px;
}
#boxModal h4 {
  font-size: 30px;
}

#boxModal img {
  margin-right: 7px;
  box-shadow: none;
  &:hover {
    transform: none;
    border: none;
  }
}
button {
  border: none;
  background-color: #2b71b8;
  color: white;
  height: 30px;
}
</style>
