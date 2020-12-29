import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Products from "@/views/Products";
import Buyers from "@/views/Buyers";
import BuyerDetail from "@/views/BuyerDetail";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  //Use history mode de HTML
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/products", name: "products", component: Products },
    { path: "/buyers", name: "buyers", component: Buyers },
    { path: "/buyer/:id", name: "buyer-detail", component: BuyerDetail },
    { path: "*", name: "error", component: Error },
  ],
});
