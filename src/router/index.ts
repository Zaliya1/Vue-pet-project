import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home/home.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/pokemon/:id',
  //   name: 'pokemon',
  //   component: PokemonInfo
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
