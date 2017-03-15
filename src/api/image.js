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
  }
}
