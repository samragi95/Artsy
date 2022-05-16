<template>
  <div>
     <div class="bg-gray-lighter min-h-screen flex flex-col relative bottom-20">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 class="mb-8 text-3xl text-center">Sign In</h1>
                        <form>
                        <input
                            type="email"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            v-model="email"
                            placeholder="email" />


                        <input
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            v-model="password"
                            placeholder="Password" />

                        <button
                            type="submit"
                            v-on:click="login"
                            class="w-full text-center py-3 rounded bg-teal-500 text-white hover:bg-green-dark focus:outline-none my-1"
                        >Login</button>
                        </form>
                    </div>
            <div class="pt-5">
             Don't have an account?
             <router-link class="no-underline border-b border-blue text-blue-400" to="/Register">
                 Register
             </router-link>
            </div>
                </div>
            </div>
            <Footer />
      </div>  
</template>
<script>
import Footer from "@/components/Footer.vue"
export default {
   
    components:{
        Footer
    },
    methods:{
        login() 
        {
            console.warn(this.email, this.password)
        }

    },
    data() {
        return {
            email:'',
            password:''
        }
    }
}
</script>