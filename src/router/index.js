import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import loginPage from "../views/loginPage.vue";
import Register from "../views/Register";
import cart from"../components/Cart.vue";
import Product from "../components/Product.vue";
Vue.use(VueRouter);

const routes = [
  {
    path:'/Home',
    name:'Home',
    component:Home,
    meta:{requiresAuth: true}
  },
  
  {
    path:"/NavBar",
    name:"NavBar",
    component: () => import("../components/NavBar.vue")
  },
  {
    path:"/Footer",
    name:"Footer",
    component: () => import("../components/Footer.vue")
  },
  
  {
    path:"/loginPage",
    name:"loginPage",
    component: loginPage
  },
  {
   path:"/cart",
   name:"cart",
   component:cart
   },
 {
  path:"/Product",
  name:"Product",
  component: Product
 },
  {
    path:"/Register",
    name:"Register",
    component: Register
  },

  ];
  const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });
  
  export default router;
