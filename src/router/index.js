import Vue from 'vue'
import Router from 'vue-router'
import Login from 'sections/Login'
import Ajuda from 'sections/Ajuda'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/ajuda',
    name: 'ajuda',
    component: Ajuda
  },
  {path: '*', redirect: '/'}
]

export default new Router({routes, mode: 'history'})
