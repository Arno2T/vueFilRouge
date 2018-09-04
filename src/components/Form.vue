<template>
    <div id="formulaire">
        <form @submit.prevent="getValues()" >
        <label for="title">Titre</label> <input type="text" name="title" placeholder="Titre" v-model="valueForm.title"> <br/>
        <textarea name="synopsis" id="synops" cols="30" rows="10" placeholder="votre synopsis ici" v-model="valueForm.synopsis"></textarea> <br/>
        <label for="poster">Poster du film</label><input type="text" id="posterFile"  name="poster" v-model="valueForm.url">
        <input id="ajouter" type="submit" value="Ajouter" @click="this.sendValues">
        </form>
        <div v-if="errorMessage">
         <p  v-for="(error,i) in errorMessage" :key="i" >{{error}}</p>
        </div>
        <p>
            <router-link to="/"> Retour à l'accueil </router-link>
        </p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      valueForm: {
        title: '',
        synopsis: '',
        url: ''
      },
      errorMessage: null
    }
  },

  methods: {
    submit () {
      console.log('formulaire ok')
    },
    getValues () {
      console.log(this.valueForm)
    },
    async sendValues () {
      this.errorMessage = null
      try {
        const response = await fetch('http://localhost:5000/addMovie', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'post',
          body: JSON.stringify(this.valueForm)
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
          this.$router.push('/')
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
@import "../assets/variables.less";
#formulaire {
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-self: center;
}

form {
  width: 50%;
  height: 70%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 5px white;
  background-color: rgb(244, 167, 66);
}
</style>
