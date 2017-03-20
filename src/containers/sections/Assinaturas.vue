<template>
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

        <div class="box_garrafas">
          <p>Garrafas</p>
          <div v-for="(garrafa, index) in Garrafas">
            <input :id="'grf-'+ index" class="mb-10" type="text" :value="garrafa"/>
          </div>
        </div>

        <div class="row-plans-freight pl-30">
          <div v-for="(data, index) in Data[0]">
            <div class="columns-plans mr-30">
              <p>Plano 1</p>
              <input type="text" :value="data.name"/>
              <p>Descrição</p>
              <textarea rows="3">{{data.description}}</textarea>
              <p>Regras</p>
              <div v-for="(preco, indice) in data.groups[index].price">
                <div v-if="indice == 1">
                  <div class="inline_flex">
                    <div class="qtd-km">
                      <label>Quantidade de Km</label>
                      <input :id="'val-' + index" type="text" :value="preco.value"/>
                    </div>
                    <div style="float:right">
                      <label>Sem troca de Km + %</label>
                      <input :id="'perc-' + index" type="text" :value="data.percentage" v-model="testePerc[index]"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rows-plans-price">
          <div v-for="(data, index) in Data[0]">
            <div class="inline_flex pr-20">
              <div class="mr-10">
                <p>Valores(R$)</p>
                  <input class="mb-10" type="text" v-model="valor[index]"/>
                  <input class="mb-10" type="text" :value="data.groups[1].price[0].value"/>
                  <input class="mb-10" type="text" :value="data.groups[2].price[0].value"/>
              </div>
              <div class="pt-28 pr-10">
                <br>
                <input :id="'total1-' + index" class="mb-10 disabled" disabled type="text" :value="totalTest(testePerc[0], valor[0])"/>
                <input :id="'total2-' + index" class="mb-10 disabled" disabled type="text" :value="totalTest(testePerc[0], valor[0])"/>
                <input :id="'total3-' + index" class="mb-10 disabled" disabled type="text" :value="totalTest(testePerc[0], valor[0])"/>
              </div>
            </div>
          </div>
<!--
          <div class="inline_flex">
            <div class="pl-20 pr-10">
              <p>Valores(R$)</p>
              <input class="mb-10" type="text" value="119,00"/>
              <input class="mb-10" type="text" value="239,00"/>
              <input class="mb-10" type="text" value="359,00"/>
            </div>
            <div class="pt-28 pr-20">
              <br>
              <input class="mb-10" type="text" value="119,00"/>
              <input class="mb-10" type="text" value="239,00"/>
              <input class="mb-10" type="text" value="359,00"/>
            </div>
          </div>

          <div class="inline_flex">
            <div class="pl-10 pr-10">
              <p>Valores(R$)</p>
              <input class="mb-10" type="text" value="119,00"/>
              <input class="mb-10" type="text" value="239,00"/>
              <input class="mb-10" type="text" value="359,00"/>
            </div>
            <div class="pt-28 mr-30">
              <br>
              <input class="mb-10" type="text" value="119,00"/>
              <input class="mb-10" type="text" value="239,00"/>
              <input class="mb-10" type="text" value="359,00"/>
            </div>
          </div>-->
        </div>
        <button class="bkg-maroon-flush btn btn--flat pd-18 btn-default br-15 c-white psr-50 mr-30 mt-10 pull-right">SALVAR
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
</template>

<script>

  import PlanTabPrice from 'components/PlanTabPrice'
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
        Garrafas: [],
        valor: [0, 0, 0],
        testePerc: [0, 0, 0]
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
        // var length = this.Data[0][0]['groups'].length

        // var lookup = {}
        /* for (var i = 0, len = this.Data.length; i < len; i++) {
         lookup[i] = this.Data[i]
         console.log(this.Data[i])
         } */
        // console.log(result)
        /*
         for (var i = 0; i < length; i++) {
         console.log('Data: ' + this.Data[0][0]['name'])

         this.Garrafas[i] = this.this.Data[0][0]['name']
         console.log('Data: ' + this.Data[0][0]['name'])
         console.log('Garrafas: ' + this.Garrafas[i])
         this.Garrafas[i] = this.Garrafas[i].replace(' ', '').replace('Garrafas', '')
         console.log('Replace: ' + this.Garrafas[i])

         } */
      }
    },
    mounted () {
      this.loadPlans()
    }
  }
</script>
