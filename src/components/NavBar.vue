<template>
<header class="w-11/12 m-auto sm:w-5/6">
<div class="flex justify-center items-baseline py-6 space-x-10 ">
  <h1 class="text-xl text-teal-600 font-bold md:text-3xl"> <a href="/home"> Artsy</a></h1>
  <div class="flex justify-center ">
   <div class="mb-3 xl:w-96">
     <div class=" bg-gray-100 rounded-full   ">
     <input class="rounded-full px-4 py-3 focus:outline-none bg-gray-100 w-5/6 " type="text" placeholder="Search for anything" name="search" id="">
  <font-awesome-icon icon="search"/>
   </div>
   </div> 
   </div>
  <router-link to="/loginPage"><p class="text-sm hover:underline rounded-full sm:text-sm font-semibold">SignIn</p></router-link>
  <router-link to="/Product"><font-awesome-icon icon="shopping-bag" class=" hover:w-5 hover:h-5 hover:rounded-full"/></router-link>
  <router-link to="/cart"><font-awesome-icon icon="shopping-cart" class="hover:"/></router-link>
  
</div>

<div class="flex text-sm justify-center  md:text-lg space-x-14 mt-6"> 
  <div class="hover:underline " v-for="(link,id) in links" :key='id'>
  <router-link :to="`${link}`">{{link}}</router-link>
  </div>
</div>
</header>

 </template>

<script>
  
export default {
  data () {
    return{
      links: [
      'Modernism',
      'Impressionism',
      'Abstract',
      'expressionism',
      'Surrealism'
      ]
       }
       
    }
}

</script>