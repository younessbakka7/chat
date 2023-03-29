<script >
import { RouterLink, RouterView } from 'vue-router'
//import '../js/app.css';
export default {
  name: "home"
}


</script>

<template>
<section class="container">
  <img class="aitala" src="/public/logo.png" alt="logo">
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

</style>
