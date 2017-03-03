<template>
  <aside class="bkg-maroon-flush">
    <ul class="menu mt-20">
      <li id="imagens" :class="['menu-item', 'c-white', 'pv-20', 'pl-50',{active: route.name === 'Imagens'}]">
        <i class="fa fa-picture-o mr-10" aria-hidden="true"></i> IMAGENS
      </li>
      <li id="planos-frete" :class="['menu-item', 'c-white', 'pv-20', 'pl-50', {active: route.name === 'Planos / Frete'}]">
        <img src="../assets/images/shape.png" class="mr-10"> PLANOS / FRETE
      </li>
      <li id="faq" :class="['menu-item', 'c-white', 'pv-20', 'pl-50',{'active': route.name === 'FAQ'}]">
        <i class="fa fa-exclamation-triangle mr-10" aria-hidden="true"></i>FAQ
      </li>
      <li id="regulamento" :class="['menu-item', 'c-white', 'pv-20', 'pl-50', {active: route.name === 'Regulamento'}]">
        <i class="fa fa-file-text-o mr-10" aria-hidden="true"></i>REGULAMENTO
      </li>
    </ul>
  </aside>
</template>

<script>

  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        route: (state) => state.route
      })
    }
  }
</script>
