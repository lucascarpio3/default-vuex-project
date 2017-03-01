<template>
  <div id="app">
    <top-bar v-if="route.name !== 'login'"></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopBar from 'containers/TopBar.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    components: {
      TopBar
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
