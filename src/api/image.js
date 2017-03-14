import Vue from 'vue'
import api from '../interceptors'

export default {

  getImages () {
    return Vue.http.get(`${api.basePath}/images`)
  }

}
