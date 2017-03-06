<link rel="stylesheet" href="../assets/scss/helpers/_font-size.scss">
<template>
    <div class="plan-freight">
        <div class="tabs-bar mt-40">
        <div :class="['tabs-bar-item', {'active': activated === 'planos'}]" @click="select('planos')">PLANOS</div>
        <div :class="['tabs-bar-item', {'active': activated === 'frete'}]" @click="select('frete')">FRETE MENSAL</div>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          activated: 'planos'
        }
      },
      methods: {
        select (selected) {
          this.activated = selected
        }
      }
    }
</script>
