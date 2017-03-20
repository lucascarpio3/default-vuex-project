import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

var apiHost
var appId

Vue.http.interceptors.push((request, next) => {
  request.params['gw-app-key'] = appId

  next(response => {
    return response
  })
})

var setupAPI = function () {
  switch (process.env.NODE_ENV) {
    case 'production':
      apiHost = ''
      appId = ''
      break
    case 'testing':
      apiHost = ''
      appId = ''
      break
    case 'development':
      apiHost = 'https://ipiranga.staging.gateway.zup.me/content-manager/v1'
      appId = 'cd9d6d70ec7d0134bb8d021e75abe44c'
      break
  }
}

setupAPI()

const api = {
  basePath: apiHost
}

export default api
