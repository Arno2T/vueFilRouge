<template>

        <figure id=modale>
          <div id="headerFigure">
             <div id="boxIcon">
                <button @click="showUpdateForm()"><img id="pencil" src="assets/pencil.png" ></button>
                <h4>{{ moviesState.selectedMovie.title }}</h4>
                <button @click="deleteFilm()"><img id="trash" src="assets/trash.svg"></button>
             </div>
          </div>
            <div id="boxModal" v-if="!showUpdate">
                <img :src="getImgUrl()" />
                <p>{{ moviesState.selectedMovie.synopsis }}</p>
            </div>
            <form v-if="showUpdate" @submit.prevent="sendUpdate()">
              <input type="text" name="title" placeholder="title" value= this.moviesState.selectedMovie.title v-model="valueUpdated.title" :moviesState="moviesState">
              <textarea name="synopsis" id="synops" value= this.moviesState.selectedMovie.synopsis  cols="30" rows="10" v-model="valueUpdated.synopsis" :moviesState="moviesState"></textarea>
              <input type="text" name="url" value= this.moviesState.selectedMovie.url v-model="valueUpdated.url" :moviesState="moviesState"> 
              <input id="ajouter" type="submit" value="Ajouter">
            </form>
            <div id="footerFigure">
             <button id="closeButton" @click="closeModal()">Close</button>
            </div>
    </figure>

</template>

<script>
import { moviesState } from '../states/movies-states.js'
export default {
  data () {
    return {
      moviesState,
      showUpdate: null,
      valueUpdated: {
        title: null,
        synopsis: null,
        url: null
      }

    }
  },
  created () {
    document.addEventListener('keydown', this.escapeKeylistener)
    this.valueUpdated.title= this.moviesState.selectedMovie.title
    this.valueUpdated.synopsis= this.moviesState.selectedMovie.synopsis
    this.valueUpdated.url = this.moviesState.selectedMovie.url
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
    showUpdateForm () {
      if (!this.showUpdate) this.showUpdate = true
      else this.showUpdate = false
    },
    escapeKeylistener (event) {
      console.log(event)
      if (event.code === 'Escape') {
        this.closeModal()
      }
    },
    async deleteFilm () {
      try {
        const response = await fetch(
          `http://localhost:5000/movie/${this.moviesState.selectedMovie._id}`, {
            method: 'delete'
          })
        console.log(this.moviesState.selectedMovie._id)
        this.moviesState.movies.splice(this.moviesState.movies.indexOf(this.moviesState.selectedMovie._id), 1)
        console.log(this.moviesState.movies)
        this.closeModal()
      } catch (err) {
        console.log(err)
      }
    },

    async sendUpdate () {
      this.errorMessage = null
      try {
        const response = await fetch(`http://localhost:5000/addMovie/${this.moviesState.selectedMovie._id}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify(this.valueUpdated)
        })
        const results = await response.json()
        if (!response.ok) {
          if (response.status === 400) {
            this.errorMessage = results
            console.log(this.errorMessage)
          } else {
            console.log('Something broken')
            this.errorMessage = ['Une erreur est survenue']
          }
        } else {
          this.closeModal()
        }
      } catch (err) {
        this.errorMessage = ['Failed to fetch']
        console.error(err)
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
  height: 60%;
}
#headerFigure{
  display: flex;
  justify-content: center;
}
#headerFigure h4{
  text-align: center;
}
#boxIcon{
  display: flex;
 align-content: center;
  margin-left: 10px;
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
#closeButton {
  border: none;
  background-color: #2b71b8;
  color: white;
  height: 30px;
  width: 30%;
}
#trash{
  border: none;
  box-shadow: none;
  height: 35px;
  width: 40px;
  border-radius: 5px;
  &:hover {
    transform: none;
    border: none;
  }
}
#pencil{
  border:none;
   box-shadow: none;
  height: 35px;
  width: 40px;
  border-radius: 5px;
  &:hover{
    transform: none;
    border: none;
  }
}
</style>
