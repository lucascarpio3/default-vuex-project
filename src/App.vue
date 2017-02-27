<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopBar from 'containers/TopBar.vue'
  export default {
    name: 'app',
    components: {
      TopBar
    }
  }
</script>
<style lang="sass">
  @import "~assets/scss/app";
</style>
