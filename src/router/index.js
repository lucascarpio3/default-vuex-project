import Vue from 'vue'
import Router from 'vue-router'
import Login from 'sections/Login'
import Ajuda from 'sections/Ajuda'
import Regulamento from 'sections/Regulamento'
import Imagens from 'sections/Imagens'
import Assinaturas from 'sections/Assinaturas'
import ImagesTeste from 'sections/TesteR'

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
    path: '/assinaturas',
    name: 'Assinaturas',
    component: Assinaturas
  },
  {
    path: '/images-teste',
    name: 'Images Teste',
    component: ImagesTeste
  },

  {path: '*', redirect: '/'}
]

export default new Router({routes, mode: 'history'})
