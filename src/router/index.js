import Vue from 'vue'
import Router from 'vue-router'
import Login from 'sections/Login'
import Ajuda from 'sections/Ajuda'
import Regulamento from 'components/Regulamento'
import Imagens from 'components/Imagens'
import PlanosFrete from 'components/PlanosFrete'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
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
    path: '/planos-frete',
    name: 'Planos / Frete',
    component: PlanosFrete
  },

  {path: '*', redirect: '/'}
]

export default new Router({routes, mode: 'history'})
