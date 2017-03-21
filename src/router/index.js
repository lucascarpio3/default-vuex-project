import Vue from 'vue'
import Router from 'vue-router'
import Login from 'sections/Login'
import Ajuda from 'sections/Ajuda'
import Regulamento from 'sections/Regulamento'
import Imagens from 'sections/Imagens'
import Assinaturas from 'sections/Assinaturas'
import MyAccount from 'sections/MyAccount'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/minha-conta',
    name: 'Minha Conta',
    component: MyAccount
  },
  {
    path: '/ajuda',
    name: 'FAQ',
    component: Ajuda
  },
  {
    path: '/regulamento',
    name: 'Regulamento',
    component: Regulamento
  },
  {
    path: '/imagens',
    name: 'Imagens',
    component: Imagens
  },
  {
    path: '/assinaturas',
    name: 'Assinaturas',
    component: Assinaturas
  },

  {path: '*', redirect: '/'}
]

export default new Router({routes, mode: 'history'})
