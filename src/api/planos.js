import Vue from 'vue'
import api from '../interceptors'

export default {
  getPlans () {
    return Vue.http.get(`${api.basePath}/bundles`)
  },
  SavePlans (data) {
    return Vue.http.put(`${api.basePath}/bundles`, {
      plans: data
    })
  }
}
