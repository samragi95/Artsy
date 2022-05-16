<template>
    <div>
        <div class="bg-grey-50 min-h-screen flex flex-col relative bottom-20 ">
         <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
         <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
             <h1 class="mb-8 text-3xl text-center">Register</h1>
             <form>
                   <input class="block border border-grey w-full p-3 rounded mb-4" type="name" name="name" v-model="email" placeholder="Enter your name" />
             <input class="block border border-grey w-full p-3 rounded mb-4" type="email" name="email" v-model="email" placeholder="email" />
             <input class="block border border-grey w-full p-3 rounded mb-4" type="password" name="password" v-model="password" placeholder="Password" />
             <button type="submit" class="w-full text-center py-3 rounded bg-teal-500 text-white hover:bg-green-dark focus:outline-none my-1">Register</button>
             </form>
         </div>
         <div class="pt-5">
             Already have an account?
             <router-link class="no-underline border-b border-blue text-blue-400" to="/loginPage">
                 Log In
             </router-link>
         </div>
         </div>
        </div>
       
       <Footer />
 
    </div>
</template>
<script>
import Footer from "@/components/Footer.vue"
import axios from "@/api/session"
 
export default {
    components:{
          Footer
    },
    mounted() {
        axios
        .get('http://127.0.0.1:8000/api/register/')
        .then (response => (this.name = response))
        .then (response => (this.email = response))
        .then (response => (this.password = response))
    },
  


    
}
</script>