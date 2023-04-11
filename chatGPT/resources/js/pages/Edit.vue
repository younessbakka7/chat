<script >
import axios from 'axios'

export default {
  name: 'Edit',
  data() {
    return {
      Firstname:"",
      Lastname  :"",
      email: "",
      password:"",
      confirmedPassword:"",
    }
  },
  methods: {
    Register(e) {
      e.preventDefault()
      axios.post('/api/auth/register',{Firstname:this.Firstname,Lastname:this.Lastname,email:this.email,password:this.password,confirmedPassword:this.confirmedPassword})
      .then(res => console.log(res))
    }
  }
}




</script>
<template>
<form @submit="Edit" class="form3">
  <img class="profil" src="Ellipse 8.png" alt="">
  <p>Edit picture</p>
  
  <div>
  <label for="">First name :</label><br>
    <input type="text" v-model="Firstname" placeholder="First-name" required><br>
  </div>
  <div class="label">
    <label for="">Last name</label><br>
    <input  type="text" v-model="Lastname" placeholder="Last-name" required><br>
  </div>
  <div class="cont">
    <label for="">Email</label><br>
    <input type="email" v-model="email" placeholder="Ecrire..." required><br>
  </div>
  <div class="cont">
    <label for="">Password</label><br>
    <input type="password" v-model="password" placeholder="password" required><br>
  </div>
  <button class="btn1">Done</button><br>




</form>





</template>



<style scoped>
.profil{
  width: 20%;
  margin-left: 23%;
  margin-top: 3%;
  margin-bottom: -7%;
}
p{
  margin-left: 27%;
  margin-top: -4%;
}
.form3{
border-radius: 15px;
padding-left: 15%;
color: black;
background-color: white;
margin-right: 20%;
margin-left: 20%;
margin-top: 3%;
padding-top: 0%;}
.label{
  margin-top: -66px;
  margin-left: 244px;
}
input[type=text] {
padding-top:12px;
padding-bottom:12px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 10px;
box-sizing: border-box;
}

input[type=email] {
width: 71%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 10px;
box-sizing: border-box;
}
input[type=password] {
  width: 71%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 10px;
box-sizing: border-box;
}
.btn1{
  background-color: #3D70B4;;
  width: 71%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 1px solid #ccc;
border-radius: 10px;
box-sizing: border-box;
transition: 0.5s;
}
.btn1:hover{
  background-color: #3D70B4;
  opacity: 0.9;

}

</style>
