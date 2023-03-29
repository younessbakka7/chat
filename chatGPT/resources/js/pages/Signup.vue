<script>
import { RouterLink, RouterView } from 'vue-router'
//import '../js/Signup.css' ;
export default {
  name: 'SignUp',
  data() {
    return {
      email: "",
      password:"",
      confirmedPassword:"",
    }
  }
}



</script>

<template>
<form action="#" class='form1'>
  <h1>Create your account</h1>
  <p>Please note that phone verification is required for signup. Your number will only be used to verify your identity for security purposes.</p>
  <label >Email :</label><br>
  <input type="Email" v-model="email" placeholder="Email"  required><br>
  
  <label >Password :</label><br>
  <input type="password" v-model="password" placeholder="password" required><br>
  
  <label > confirmed Password :</label><br>
  <input type="password" v-model="confirmedPassword" placeholder=" confirmed password" required><br>
  
  
  <button class="con">continue</button>
  <hr>


</form>
  


</template>

<style scoped>

</style>
