import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Home from "@/views/Home.vue"
import Container from "@/components/container/src/index.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Container",
    component: Container,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
