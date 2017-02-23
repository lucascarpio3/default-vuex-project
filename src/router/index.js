import Vue from 'vue'
import Router from 'vue-router'
import Login from 'sections/Login'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {path: '*', redirect: '/'}
]

export default new Router({routes, mode: 'history'})
