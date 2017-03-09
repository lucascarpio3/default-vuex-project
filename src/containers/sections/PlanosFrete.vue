<template>
    <!--Planos-->
    <div class="plan-freight">
        <div class="tabs-bar mt-40 pl-50">
        <div :class="['tabs-bar-item', {'active': activated === 'planos'}]" @click="select('planos')">PLANOS
        </div>
            <div :class="['tabs-bar-item', {'active': activated === 'personalizacao'}]" @click="select('personalizacao')">PERSONALIZAÇÃO DE RÓTULOS</div>
        <div :class="['tabs-bar-item', {'active': activated === 'frete'}]" @click="select('frete')">FRETE MENSAL</div>
        </div>
        <div class="row-section-plans">
            <plan-tab-freight></plan-tab-freight>
        </div>
    </div>
</template>

<script>
    import PlanTabFreight from 'components/PlanTabFreight'
    export default {
      components: {
        PlanTabFreight
      },
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
