<script >
import { RouterLink, RouterView } from 'vue-router'










export default {
  name: "home"
}


</script>

<template>
<section class="container">
<img class="logo" src="logo.png">
  <h1 class="wel">Welcome to ChatGPT by Aitala Banding</h1>
  <p class="p1">Log in with your OpenAI account to continue</p>
  <div class="btn">
    <router-link to="/Login">
      <button class="btn2">Login</button>
   </router-link>
   <router-link to="/Signup">
    <button class="btn2">Sign up</button>
   </router-link>
   

</div>

</section>
  


</template>

<style scoped>
.logo{
  
  border-radius: 50%;
  margin-left: 550px;
  height:190px ;
}
.container {

  color: white;
  margin-left: 250px;
  margin-top: 10%;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  height: 100%;
}

.wel {
  opacity: 0.5;
  text-align: center;
  color: blue;
  font-size: 30px;
}

.p1 {
  color: black;
  text-align: center;
  font-size: 20px;
}

.btn {

  margin-left: 40%;
  padding-top: 40px;
  padding-bottom: 40px;
}

button {
  border-radius: 10px;
  width: 100px;
  height: 50px;
  color: white;
  background-color:#53b8da;


}

.btn2 {
  margin-left: 15px;
}

button:hover {
  color: black;

  background-color: #ADD8E6;
}
.aitala{
  width:200px;
  height:60%;
  float: center;
  margin-bottom: 0;
}

</style>
