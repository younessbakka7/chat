<script >




</script>
<template>
  <div class="containner">
  <div class="logo">
    <img src="vvvv 2.png" alt="">
  </div>

  <div class="login-info">
  <div class="text">
    <h1>Welcome to Aitela Branding</h1>
    <p>Sign In to Continue.</p>
  </div><br>

  <form action="">
    <div class="cont">
    <label for="">Your Email:</label><br>
    <input type="email" placeholder="Email ici ..." required><br><br>
  </div>
  <div class="cont">
    <label for="">Password:</label><br>
    <input type="password" placeholder="Password" required><br>
  </div>
    <p class="forget">Forgot Password ?</p>
    <button class="btn1">Sign In</button><br>
    <button class="btn2">Register</button>

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
.containner{
  background-image: url("gbvvq 1.png");
  background-position: right;
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

  width:80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=password] {
  width:80%;
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
  width:80%;
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
.btn2:hover{
  opacity: 0.5;
  color: black;
  
}
.btn2{
  width:80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  transition: 0.5s;
}
.logo{
  width: 10%;
}
.login-info{
  padding-top:15%; 
  width: 45%;
}
.login-img{
  
  display: flex;
    flex-direction: row;
    justify-content: center;

}
.img-cont{
  height: 98%;
  width: 91%;
    background: #234877;
    border-radius: 29px;
    margin: 20px;
}
.mac{

     width: 80%;
    margin-top: -53%;
    margin-left: 22px;
}


.Ellipse{
  padding-left:180px;
  margin-top: 150px;
  
  width: 60%;
  
}
.p1{
  color: white;
padding-bottom: 90px;
text-align: center;


}
</style>
