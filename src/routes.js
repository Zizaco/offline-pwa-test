import VueRouter from "vue-router";
import JournalHub from "./components/Journal/JournalHub.vue";
import HouseHub from "./components/House/HouseHub.vue";

const routes = [
  { path: '/journal', component: JournalHub },
  { path: '/home', component: HouseHub }
]

const router = new VueRouter({
  linkActiveClass: 'is-active',
  routes
})

export default router