<template>
  <div class="cart">
    <h1 class="text-lg font-bold text-center py-8">Your Cart</h1>
    <p class="text-center py-20" v-show="!products.length">
      <i class="font-semibold text-3xl not-italic">Your cart is empty!!</i
      ><br />

      <router-link
        class="bg-orange-100 outline px-4 relative top-8 py-4"
        to="/Home"
        >Explore More!!</router-link
      >
    </p>
    <div class="p-8 mx-auto mt-12 bg-white">
      <div class="w-full overflow-x-auto">
        <table class="w-full shadow-inner" v-show="products.length">
          <thead>
            <tr class="bg-orange-100">
              <td class="px-6 py-3 font-bold whitespace-normal">Name</td>
              <td class="px-6 py-3 font-bold whitespace-normal">Quantity</td>
              <td class="px-6 py-3 font-bold whitespace-normal">Price</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(p, id) in products" :key="id">
              <td class="py-2 px-6 whitespace-nowrap">{{ p.name }}</td>
              <td class="py-2 px-6 whitespace-nowrap bg-slate-200">
                {{ p.quantity }}
              </td>
              <td class="py-2 px-6 whitespace-nowrap">${{ p.Price }}</td>
            </tr>
            <tr>
              <td class="px-6">
                <div class="font-bold">Total:</div>
              </td>

              <td></td>
              <td class="relative left-5">
                <b>${{ total }}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <p class="text-center">
      <button
        v-show="products.length"
        class="bg-slate-400 px-4 rounded-md outline-hidden hover:outline"
        v-on:click="checkout"
      >
        Checkout
      </button>
    </p>
    <Footer />
  </div>
</template>
<script>
import Footer from "./Footer.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Footer,
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.Price * p.quantity;
      }, 0);
    },
  },
  methods: {
    checkout() {
      alert("your total $" + this.total);
    },
  },
};
</script>
