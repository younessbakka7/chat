<script >
import {RouterLink, RouterView } from 'vue-router'
import router from "@/router"
import axios from 'axios'
//import '../js/Login.css';
export default {
  name: 'Login',
  data() {
    return {
      email: "",
      password:"",
    }
  },
  methods: {
    signin(e) {
      e.preventDefault()
      axios.post('/api/auth/login',{email:this.email,password:this.password})
      .then(res => {
        console.log(res)
        router.push({path: 'Interface'})
      })
    }
  }
}



</script>



<template>






<form @submit="signin" class="form">
  <h1>Welcome back</h1>
  <label >Email : <span>*</span></label><br>
  <input type="Email" placeholder="Email" v-model="email" required><br>
  <label >Password : <span>*</span></label><br>
  <input type="password" placeholder="password" v-model="password" required><br>
  
  <button class="con">continue</button>

</form>



</template>


<style scoped>



h1{
  font-size: 50px;
  color:#77c6e0;
}
.form{
  width: 350px;
  margin-left: 500px;

  color: black;
}
label{
  font-size: 20px;
}
input[type=Email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  transition: 0.5s;
}
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  transition: 0.5s;
}
.con{
  background-color: #53b8da;
;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  transition: 0.5s;
}
input:hover{
  border-radius: 30px;


}
.con:hover{
  background-color:  #ADD8E6;
  border-radius: 30px;
}
span{
  color:red;
}
</style>
