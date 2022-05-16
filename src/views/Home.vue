<template>
    <div class="home">
        <section class="bg-emerald-200 px-12 py-8 mt-6 relative z-20">
            <h1 class="text-4xl text-center">Find thing's you'll love, only on Artsy!! </h1>
            <h2 class=" mt-3 text-center text-2xl font-bold">Everyday findings </h2>
            <div class="flex w-5/6 justify-center m-auto space-x-8 mt-8">
                <div v-for="(prod,id) in sections" :key="id">
                    <div class="translate-y-20 z-10 hover:underline cursor-pointer">
                        <img class="w-64 h-64 rounded-full sm:w-20 sm:h-20 sm:rounded-full " :src="`${prod.url}`" alt="">
                        <p class="justify-center ml-3.5 mt-3  font-semibold text-sm">{{prod.name}}</p>
                    </div> 
                </div>
            </div>
        </section>

        <div class="w-11/12 m-auto mt-20">
          <section class="text-left">
            <p class="text-2xl font-bold text-center">Popular paintings</p>
            <p class="text-sm text-center">Based on Popularity</p>
            <div class="flex w-5/6 space-x-8 mt-8 ml-28 justify-center  ">
              <div v-for="(prod,id) in sections" :key='id'>
                
              <div class="group shadow-lg rounded-md p-2 flex flex-col justify-center items-center hover:translate-y-7 duration-500 ease-in-out">
                <div>
                <img class="w-48 h-48 rounded-lg " :src="`${prod.url}`" alt="">
                <div class="px-20 relative bottom-11 translate-x-16 invisible group-hover:visible ">
                <div class=" w-8 h-8 p bg-white shadow rounded-full ">
                <svg class="w-7 h-7 pt-2 pl-1  rounded-full" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                </div>
                </div>
                </div>
                <p>{{prod.name}}</p>
                <ul class="flex space-x-1">
                <li >
                <svg class="w-5 h-5  text-yellow-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </li>
                <li>
                   <svg class="w-5 h-5 text-yellow-400 opacity-.3 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </li>
                <li>
                   <svg class="w-5 h-5 text-yellow-400 opacity-.3 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               </li>
               <li>
                <svg class="w-5 h-5 text-yellow-400 opacity-.3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               </li>
               <li>
                 <svg class="w-5 h-5 text-yellow-400 opacity-.3 hover" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               </li>
                </ul>
                <div class="py-2 ">
                <div class="bg-white shadow-lg  w-15 h-5  rounded-full cursor-pointer hover:trigger hover">
                 <p class="text-xs px-4 ">{{prod.Price}}</p> 
                </div>
                </div>
              </div>
              </div>
            </div>
          </section>
          </div>
          

      <div class="w-11/12 m-auto mt-14">
          <section class="text-left">
            <p class="text-2xl font-bold text-center">Shop Our Sections</p>
            <div class="flex w-5/6 space-x-8 mt-8 ml-28 justify-center">
              <div v-for="(prod,id) in sections" :key='id'>
              <div class="group shadow-lg rounded-md p-2 flex flex-col justify-center items-center hover:translate-y-8 duration-300 ease-in-out  ">
                <div>
                <img class="w-48 h-48 rounded-lg " :src="`${prod.url}`" alt="">
                <div class=" px-20 h-auto w-auto relative bottom-11 translate-x-16 invisible group-hover:visible">
                <div class=" w-8 h-8 p bg-white shadow rounded-full ">
                <svg class="w-7 h-7 pt-2 pl-1  rounded-full" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>
                </div>
                </div>
                </div>
                <p>{{prod.name}}</p>
                <ul class="flex space-x-1">
                <li >
                <svg class="w-5 h-5  text-yellow-400 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </li>
                <li>
                   <svg class="w-5 h-5 text-yellow-400 opacity-.3 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </li>
                <li>
                   <svg class="w-5 h-5 text-yellow-400 opacity-.3 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               </li>
               <li>
                <svg class="w-5 h-5 text-yellow-400 opacity-.3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               </li>
               <li>
                 <svg class="w-5 h-5 text-yellow-400 opacity-.3 hover" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
               </li>
                </ul>
                <div class="py-2 ">
                <div class="bg-white shadow-lg  w-15 h-5  rounded-full cursor-pointer ">
                 <p class="text-xs px-4 ">{{prod.Price}}</p> 
                </div>
                </div>
              </div>
              </div>
            </div>
          </section>
          </div>
         <Footer />

</div>


    
</template>

<script>
import Product from "@/components/Product.vue"
import Footer from "@/components/Footer.vue"
export default {
    name:'Home',
    components: {
        Product,
        Footer
    },
    data () {
    return {
    products: [],
      sections: [
        {
          url: 'https://images.unsplash.com/photo-1518945756765-f8641d60fc0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
          name: 'Venice',
          Price: 'USD 114.80'
        },
        {
          url: 'https://images.unsplash.com/photo-1567061698906-fc74288ce52a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          name: 'Abstract',
          Price: 'USD 150.99'
        },
        {
          url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80',
          name: 'Flower',
          Price:'USD 499.99'
        },
        {
          url: 'https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
          name: 'Angles',
          Price: 'USD 112.2'
        },
        {
          url: 'https://images.unsplash.com/photo-1579783483346-b4b3f315096b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1358&q=80',
          name: 'Waiting',
          Price:'USD 25.42'
        }
      ],
    }
  },
}
</script>