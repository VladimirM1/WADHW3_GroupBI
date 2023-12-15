import { createRouter, createWebHashHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'
import AboutView from '../views/AboutView.vue'
import auth from "@/auth";
const routes = [
  {
    path: '/',
    name: 'home',
    component: PostView,
    beforeEnter: async(to,from,next) => {
      let authResult = await auth.authenticated();
      if (!authResult){
        next('/login')
      } else {
        next()
      }
    }

  },
  {
    path: '/contacts',
    name: 'contacts',
    component: AboutView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
