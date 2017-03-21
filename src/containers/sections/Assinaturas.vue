<template>

  <div>
    <!--Planos-->
    <div class="plan-freight">
      <div class="tabs-bar mt-40 pl-50">
        <div :class="['tabs-bar-item', {'active': activated === 'planos'}]" @click="select('planos')">PLANOS</div>
        <div :class="['tabs-bar-item', {'active': activated === 'personalizacao'}]" @click="select('personalizacao')">
          PERSONALIZAÇÃO DE RÓTULOS
        </div>
        <div :class="['tabs-bar-item', {'active': activated === 'frete'}]" @click="select('frete')">FRETE MENSAL
        </div>
      </div>

      <div v-if="activated === 'planos'">
        <div class="row-section-plans">

          <div class="box_garrafas c-carnation">
            <p>Garrafas</p>
            <div v-for="(valor, index) in Garrafas">
              <input class="mb-10" type="text" :value="valor"/>
            </div>
          </div>

          <div class="row-plans-freight pl-30">
            <Plan v-for="data in Data[0]"
                  :key="data.id"
                  :DataPlan="data"></Plan>
          </div>
          <br>
          <button class="bkg-maroon-flush btn btn--flat pd-18 btn-default br-15 c-white psr-50 mr-30 mt-10 pull-right">
            SALVAR
          </button>
        </div>
      </div>

      <div class="rows-section" v-if="activated === 'personalizacao'">
        <TabLabelCustomization></TabLabelCustomization>
        <TabLabelCustomizationRight></TabLabelCustomizationRight>
      </div>

      <div class="rows-section" v-if="activated === 'personalizacao'">
        <TabLabelCustomizationDown></TabLabelCustomizationDown>
      </div>

      <div class="rows-section" v-if="activated === 'frete'">
        <MonthFreight></MonthFreight>
      </div>
    </div>
  </div>
</template>

<script>
  import PlanTabPrice from 'components/PlanTabPrice'
  import Plan from 'components/Plans'
  import TabLabelCustomization from 'components/TabLabelCustomization'
  import TabLabelCustomizationRight from 'components/TabLabelCustomizationRight'
  import TabLabelCustomizationDown from 'components/TabLabelCustomizationDown'
  import MonthFreight from 'components/MonthFreight'
  import PlanTabPriceMonthFreight from 'components/PlanTabPriceMonthFreight'
  import Modal from 'components/Modal'
  import PlansApi from '../../api/planos'

  export default {
    components: {
      PlanTabPrice,
      Plan,
      TabLabelCustomization,
      TabLabelCustomizationRight,
      TabLabelCustomizationDown,
      MonthFreight,
      PlanTabPriceMonthFreight,
      Modal
    },
    data () {
      return {
        activated: 'planos',
        Data: [],
        Garrafas: []
      }
    },
    methods: {
      totalTest (perc, valor) {
        return perc * valor
      },
      select (selected) {
        this.activated = selected
      },
      loadData () {
        // console.log(this.Data[0][0].name)
        for (var i = 0; i < this.Data[0].length; i++) {
          this.Garrafas[i] = this.Data[0][0].groups[i].name.replace(' ', '').replace('Garrafas', '')
        }
      },
      loadPlans () {
        PlansApi.getPlans().then(response => {
          var jsonObj = JSON.parse(JSON.stringify(response.body))
          for (var key in jsonObj) {
            this.Data.push(jsonObj[key])
          }
          // console.log(this.Data[0])
          this.loadData()
        })
      }
    },
    mounted () {
      this.loadPlans()
    },
    computed: {}
  }
</script>
