<template>
  <div>
    <h1 class="font-bold text-center py-8 font-sans text-lg">All Products</h1>
      <div class="flex w-5/6 space-x-8 mt-5 ml-28 justify-center  ">
              <div v-for="(product,id) in products" :key='id'>
              <div class="group shadow-lg rounded-md p-2 flex flex-col justify-center items-center ">
              <img class="w-48 h-48 rounded-lg " :src="product.image" alt="">
                          <p class="pt-3">{{product.name}}</p>
             <div class="py-3 "> <button class=" px-2 outline  rounded-md bg-teal-500 hover:outline-2 " v-on:click='addToCart(product)'>Add To Cart</button>
  
              </div>
              </div>
              </div>
              </div>
               <div class="flex w-5/6 space-x-8 mt-5 ml-28 justify-center  ">
              <div v-for="(product,id) in products" :key='id'>
              <div class="group shadow-lg rounded-md p-2 flex flex-col justify-center items-center ">
              <img class="w-48 h-48 rounded-lg " :src="product.image" alt="">
                          <p class="pt-3">{{product.name}}</p>
             <div class="py-3 "> <button class=" px-2  outline  rounded-md bg-teal-500 hover:outline-2 " v-on:click='addToCart(product)'>Add To Cart</button>
  
              </div>
              </div>
              </div>
              </div>
    
      <Footer />
  </div>
</template>
<script> 
import Footer from "../components/Footer.vue"
import {mapGetters, mapActions} from 'vuex'
export default {
  name:'app',
  components:{
    Footer
  },
  computed:mapGetters({
    products: 'allProducts',
    length: 'getNumberOfProducts'
  }),
  methods: mapActions([
    'addToCart'
  ])
  }
</script>