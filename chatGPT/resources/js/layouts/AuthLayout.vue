<script>
    
</script>
<template>
    <header>
        <ul>
            <li><button @click="out">logout</button></li>
        </ul>
    </header>
    <div>
        <router-view />
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: 'AuthLayout'
    }

       
</script>