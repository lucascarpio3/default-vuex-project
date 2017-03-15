import Vue from 'vue'
import api from '../interceptors'

export default {

  getImages () {
    return Vue.http.get(`${api.basePath}/images`)
  },
  SaveImages (data) {
    return Vue.http.put(`${api.basePath}/images`, {
      images: data
    })
  },
  getWines () {
    return Vue.http.get(`${api.basePath}/wines`)
  },
  SaveWines (data) {
    return Vue.http.put(`${api.basePath}/wines`, {
      images: data
    })
  }
}
