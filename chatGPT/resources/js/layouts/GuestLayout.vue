<script>
    
</script>
<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-header">
        <router-link to="/" class="navbar-logo">Aitala</router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-links">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/login" class="navbar-item">Login</router-link>
          <router-link to="/signup" class="navbar-item">Signup</router-link>
        </div>
      </div>
    </div>
    </nav>
    <div>
        <router-view />
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
.navbar {
  background-color:#53b8da;
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
.navbar {
  background-color:#53b8da;
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
</style>