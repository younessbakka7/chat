<script>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'

export default {
  name: 'SignUp',
  data() {
    return {
      name:"",
      email: "",
      password:"",
      confirmedPassword:"",
    }
  },
  methods: {
    Register(e) {
      e.preventDefault()
      axios.post('/api/auth/register',{name:this.name,email:this.email,password:this.password,password_confirmation:this.confirmedPassword})
      .then(res => console.log(res))
    }
  }
}



</script>

<template>
<form @submit="Register" class='form1'>
  <h1>Create your account</h1>
  <p>Please note that phone verification is required for signup. Your number will only be used to verify your identity for security purposes.</p>
  <label >Name :</label><br>
  <input type="text" v-model="name" placeholder="name"  required><br>
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
.form1{
  
  color: black;
  padding-left: 50px;
  padding-right: 50px;
  width: 60%;
  margin-left: 20%;
  margin-top: 160px;
  margin-right: 50%;
  
  
  }
h1{
  font-size: 40px;
  text-align: center;
  color: #53b8da;
}
p{
  text-align: center;
  font-size: 15px;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text]:focus {
  border: 3px solid #555;
}
input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=email]:focus {
  border: 3px solid #555;
}
input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=password]:focus {
  border: 3px solid #555;
}
input:hover{
  border-radius: 30px;
}
.con{
  width: 100%;
  background-color: #53b8da;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.con:hover {
  background-color:#ADD8E6;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

</style>
