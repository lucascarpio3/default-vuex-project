import Vue from 'vue'
import api from '../interceptors'

export default {
  getRegulation (id) {
    return Vue.http.get(`${api.basePath}/images/` + id)
  },
  SaveRegulation (data) {
    return Vue.http.put(`${api.basePath}/images`, {
      images: data
    })
  }
}
