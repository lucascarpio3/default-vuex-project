<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
  import TopBar from 'containers/TopBar.vue'
  import Footer from 'containers/Footer.vue'
  export default {
    name: 'app',
    components: {
      TopBar,
      Footer
    }
  }
</script>
<style lang="sass">
  @import "~assets/scss/app";
</style>
