<template>
  <div id="app">
    <top-bar :title-page="route.name" v-if="route.name !== 'login'"></top-bar>
    <div class="container" v-if="route.name !== 'login'">
      <faq-menu></faq-menu>
      <div class="section pl-100">
        <router-view></router-view>
      </div>
    </div>
    <router-view v-if="route.name === 'login'"></router-view>
  </div>
</template>

<script>
  import TopBar from 'containers/TopBar.vue'
  import FaqMenu from 'containers/Menu.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    components: {
      TopBar,
      FaqMenu
    },
    computed: {
      ...mapState({
        route: (state) => state.route
      })
    }
  }
</script>
<style lang="sass">
  @import "~assets/scss/app";
</style>
