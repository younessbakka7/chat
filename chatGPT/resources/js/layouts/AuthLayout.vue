<script>
    
</script>
<template>
    <header>
        <ul>
            <li><button type="button" @click="logout">logout</button></li>
        </ul>
    </header>
    <div>
        <router-view />
    </div>
</template>
<script>
    import axios from 'axios';
    import router from "@/router"
    export default {
        name: 'AuthLayout', 
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