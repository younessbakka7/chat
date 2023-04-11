<script>
    
</script>
<template>
<div class="body">


  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-header">
        <router-link to="/Chatboot" ><img class="img-logo" src="Logo Name Transparent 1 (1).png" alt="logo" /></router-link>
        <router-link to="/Edit" ><i class="fa-sharp fa-solid fa-gear"></i></router-link>
      </div>
    </div>
    </nav>


    <div>
        <router-view />
    </div>

</div>
</template>
<script>
    import axios from 'axios';
    import router from "@/router"
    export default {
        name: 'GuestLayout', 
        methods: {
            logout() {
                // preventDefault()
                axios.post('/api/auth/logout',{
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }) .then(res => {
                localStorage.removeItem("access_token")
                router.push({ path: "/" });
                })
                .catch( err=> {
                    consol.error(err);
                })
            }
        }
    }
    
       
</script>
<style scoped>
.fa-sharp {
  margin-left: 5000%;
  margin-top: -23px;
  width: 19px;
  color: #333;
}

.body{
  background-color: rgba(69, 69, 168, 0.699);
  height: 42rem;
  width: 100%; 
}
.navbar {

  background-color: #fff;
    color:black;
    font-size: 1.2rem;
  
    border-radius: 10px 0px 0px 0px ;
   height: 90px;
}
.img-logo{
  margin-left: 200%;

  margin-top:-6%;
}

.navbar-container {

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navbar-header {

  display: flex;
  align-items: center;
}

/* .navbar-logo {
width: 20px;
height: 10px;
} */

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-links {
  display: flex;
}

.navbar-item {
  color: black;
  margin-right: 1rem;
  text-decoration: none;
}

.navbar-buttons {
  display: flex;
}

.navbar-button {
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
}

.navbar-button:hover {
  background-color: #ddd;
}
.navbar {
  color: #fff;
  font-size: 1.2rem;
  
  border-radius: 0px 0px 40px 40px;
}

.navbar-container {

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.navbar-header {

  display: flex;
  align-items: center;
}

.navbar-logo {
  margin-left: 30px;
  color: #fff;
  font-weight: bold;
}

.navbar-menu {
  display: flex;
  align-items: center;
}

.navbar-links {
  display: flex;
}

.navbar-item {
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;
}

.navbar-buttons {
  display: flex;
}

.navbar-button {
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
}

.navbar-button:hover {
  background-color: #ddd;
}
.nav-item {
  color: #333;
}
</style>