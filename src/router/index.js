import { createRouter, createWebHashHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'
import LoginView from '../views/LoginView.vue'
import PostView from '../views/PostView.vue'


const routes = [
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
