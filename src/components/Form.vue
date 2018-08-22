<template>
    <div id="formulaire">
        <form @submit.prevent="getValues()">
        <label for="title">Titre</label> <input type="text" name="title" placeholder="Titre" v-model="valueForm.title"> <br/>
        <textarea name="synopsis" id="synops" cols="30" rows="10" placeholder="votre synopsis ici" v-model="valueForm.synopsis"></textarea> <br/>
        <label for="poster">Poster du film</label><input type="file" id="posterFile"  name="poster">
        <input id="ajouter" type="submit" value="Ajouter" @click="this.sendValues">
        </form>
        <p>
            <router-link to="/"> Retour à l'accueil </router-link>
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return{
             valueForm: {
                 title: "",
                 synopsis:"",
             }
        }
       
    },
    
    methods:{
        submit(){
            console.log("formulaire ok")
        },
        getValues(){
            console.log(this.valueForm)
        },
      async sendValues(){
           await fetch('http://localhost:5000/addMovie', {
              headers:{
                 "Content-Type": 'application/json'
              },
              method: 'post',
              body: JSON.stringify(this.valueForm),
          })

      }
    }
}
</script>


<style lang="less">

@import '../assets/variables.less' ;
    #formulaire{
        width: 60%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-self: center;    
        }

    form{
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

