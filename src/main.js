import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store //store";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faSearch, faShoppingBag, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faTwitter, faFacebook, faInstagram, faGithub,faShoppingBag, faShoppingCart ,faSearch);
Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
