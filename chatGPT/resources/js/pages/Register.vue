<script >
import router from "@/router";
import axios from 'axios';

export default {
  name: 'Register',
  data() {
    return {
      firstName:"",
      lastName  :"",
      email: "",
      password:"",
      password_confirmation:"",
      errors: {name:"",email: "", password: "",password_confirmation: ""},
      auth: {},
    }
  },
  methods: {
    Register(e) {
      e.preventDefault()
      axios.post('/api/auth/register',{firstName:this.firstName,lastName:this.lastName,email:this.email,password:this.password,password_confirmation:this.password_confirmation})
      .then(res => {
        localStorage.setItem("access_token",res.data.token)
        this.auth = res.data.user
        router.push({ path: "/Chatboot" });
      })
      .catch( (error) => {
        console.log(error);
        if (error.response.status === 422) {
          this.errors = error.response.data.errors
        }
    });
    }
  }
}
</script>

<template>
  <div class="containner">
  <div class="logo">
    <img src="vvvv 2.png" alt="">
  </div>

  <div class="login-info">
  <div class="text">
    <h1>Welcome to Aitela Branding</h1>
    <p>Register to Continue.</p>
  </div><br>

  <form @submit="Register" class="form2">
    <div class="cont">
    <label for="">First name :</label><br>
    <input type="text" v-model="firstName" placeholder="First-name" required><br>
    <span class="err">
      <p v-if="errors.firstName">{{ errors.firstName[0] }}</p>
    </span>
  </div>
  <div class="label">
    <label for="">Last name</label><br>
    <input  type="text" v-model="lastName" placeholder="Last-name" required><br>
    <span class="err">
      <p v-if="errors.lastName">{{ errors.lastName[0] }}</p>
    </span>
  </div>
  <div class="cont">
    <label for="">Email</label><br>
    <input type="email" v-model="email" placeholder="email..." required><br>
    <span class="err">
      <p v-if="errors.email">{{ errors.email[0] }}</p>
    </span>
  </div>
  <div class="cont">
    <label for="">Password</label><br>
    <input type="password" v-model="password" placeholder="password" required><br>
    <span class="err">
      <p v-if="errors.password">{{ errors.password[0] }}</p>
    </span>
  </div>
  <div class="cont">
    <label for="" > Confirmer Password : </label><br>
    <input type="password" v-model="password_confirmation" placeholder="repeat Password" required><br>
  </div>
    <p class="forget">Forgot Password ?</p>
    <button class="btn1">Sign In</button><br>
    

  </form>
</div>
  <div class="login-img">
    <div class="img-cont">
      <img class="Ellipse" src="Ellipse 4.png" alt="Ellipse" />
    
      <img class="mac" src="MacBook Pro 16.png" alt="" />
      
      <p class="p1">BotConnect: Your Personal Chat Assistant</p>
    </div>
  </div>
</div>
</template>

<style scoped>

.label{
  margin-top: -85px;
  margin-left:60%;
}
.containner{
  background-image: url("gbvvq 1.png");
  background-position: right top;

  display: flex;


}
.login-info{
  width: 100%;

  

}
.login-info h1{
  height: 50px;
width: 409px;
left: 145px;
top: 239px;
border-radius: nullpx;


}
.login-info p{
  margin-left: 10px;
font-size: 20px;
font-weight: bold;

}

label{

  font-weight: bold;
font-size: 15px;
letter-spacing: 0.12em;

color: #1E1E1E;
}
input[type=email] {

  width: 111%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=text] {

  width:-3%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=password] {
  width:111%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.forget{
  transition: 0.5;
}
.forget:hover{
  text-decoration:underline;
}
.btn1{
  width:111%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background: #3670BE;
opacity: 0.9;
border-radius: 20px;
transition: 0.5s;
}
.btn1:hover{
  opacity: 0.5;
  color: white;
  
}


.logo{
  width: 10%;
}
.login-info{
  padding-top:15%; 
  width: 45%;
}
.login-img{
  
  /* display: flex;
    flex-direction: row;
    justify-content: center; */
    margin-right: -141px;
    margin-left: 85px;
}
.img-cont{
  height: 98%;
  width: 77%;
    background: #234877;
    border-radius: 29px;
    margin: 20px;
}
.mac{

     width: 80%;
    margin-top: -53%;
    margin-left: -2px;
}


.Ellipse{
  padding-left: 136px;
    margin-top: 210px;
    width: 60%;

  
}
.p1{
  color: white;
  padding-left: 69px;
padding-top: 28px;
text-align: center;


}
</style>