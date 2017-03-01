<template>
  <div id="app">
    <top-bar></top-bar>
    <div class="container">
    <faq-menu></faq-menu>
    <div class="section">
    <router-view></router-view>
    </div>
  </div>
  </div>
</template>

<script>
  import TopBar from 'containers/TopBar.vue'
  import FaqMenu from 'containers/Menu.vue'
  export default {
    name: 'app',
    components: {
      TopBar,
      FaqMenu
    }
  }
</script>
<style lang="sass">
  @import "~assets/scss/app";
</style>
