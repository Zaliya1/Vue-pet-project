import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/home.vue";
import Film from "@/views/film/film.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/film/:id',
    name: 'film',
    component: Film
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
