import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/learn",
    name: "Learn",    
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Learn.vue"),
  },
  {
    path: "/about",
    name: "About",    
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",    
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/microcontroller",
    name: "Microcontroller",    
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Learns/Microcontroller.vue"),
  },
  {
    path: "/modules",
    name: "Modules",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Learns/Modules.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;