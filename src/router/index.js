import { createRouter, createWebHashHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'
import AddPostView from '../views/AddPostView.vue'
import APostView from '../views/APostView.vue'
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
    path: '/addPost',
    name: 'addPost',
    component: AddPostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/login')
      } else {
          next();
      }
  }
  },

  {
    path: '/aPost/:id',
    name: 'aPost',
    component: APostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
