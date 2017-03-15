<template>
    <!--Planos-->
    <div class="plan-freight">
        <div class="tabs-bar mt-40 pl-50">
            <div v-if="" :class="['tabs-bar-item', {'active': activated === 'planos'}]" @click="select('planos')">PLANOS</div>
            <div v-if="" :class="['tabs-bar-item', {'active': activated === 'personalizacao'}]" @click="select('personalizacao')">PERSONALIZAÇÃO DE RÓTULOS</div>
            <div v-if="" :class="['tabs-bar-item', {'active': activated === 'frete'}]" @click="select('frete')">FRETE MENSAL</div>
        </div>
        <div class="rows-section" v-if="activated === 'planos'">
            <div class="row-section-plans">
                <plan-tab-freight></plan-tab-freight>
            </div>
        </div>
        <div class="rows-plans-price pl-30" v-if="activated === 'planos'">
            <plan-tab-price></plan-tab-price>
        </div>
        <div class="rows-section" v-if="activated === 'personalizacao'">
            <TabLabelCustomization></TabLabelCustomization>
            <TabLabelCustomizationRight></TabLabelCustomizationRight>
        </div>
        <div class="rows-section" v-if="activated === 'personalizacao'">
        <TabLabemCustomizationDown></TabLabemCustomizationDown>
        </div>
        <div class="rows-section" v-if="activated === 'frete'">
            <MonthFreight></MonthFreight>
        </div>
    </div>
</template>

<script>
  import PlanTabFreight from 'components/PlanTabFreight'
  import PlanTabPrice from 'components/PlanTabPrice'
  import TabLabelCustomization from 'components/TabLabelCustomization'
  import TabLabelCustomizationRight from 'components/TabLabelCustomizationRight'
  import TabLabelCustomizationDown from 'components/TabLabelCustomizationDown'
  import MonthFreight from 'components/MonthFreight'
  import PlanTabPriceMonthFreight from 'components/PlanTabPriceMonthFreight'
  import Modal from 'components/Modal'
  export default {
    components: {
      PlanTabFreight,
      PlanTabPrice,
      TabLabelCustomization,
      TabLabelCustomizationRight,
      TabLabelCustomizationDown,
      MonthFreight,
      PlanTabPriceMonthFreight,
      Modal
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
