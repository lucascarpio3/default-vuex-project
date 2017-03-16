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
          <div>
            <p>Garrafas</p>
            <input class="mb-10" type="text" value="2"/>
            <input class="mb-10" type="text" value="4"/>
            <input class="mb-10" type="text" value="6"/>
          </div>
        </div>
        <div class="row-plans-freight">

          <div class="columns-plans pl-30 mr-30">
            <p>Plano 1</p>
            <input type="text" value="Explorador"/>
            <p>Descrição</p>
            <textarea rows="3">Perfeito para você iniciar no universo dos vinhos.</textarea>
            <p>Regras</p>
            <div class="inline_flex">
              <div class="qtd-km">
                <label>Quantidade de Km</label>
                <input type="text" value="100"/>
              </div>
              <div>
                <label>Sem troca de Km + %</label>
                <input type="text" value="20%"/>
              </div>
            </div>
          </div>

          <div class="columns-plans mr-30">
            <p>Plano 2</p>
            <input type="text" value="Seleção"/>
            <p>Descrição</p>
            <textarea rows="3">Para você que aprecia vinhos selecionados e com personalidade</textarea>
            <p>Regras</p>
            <div class="inline_flex">
              <div class="qtd-km">
                <label>Quantidade de Km</label>
                <input type="text" value="100"/>
              </div>
              <div>
                <label>Sem troca de Km + %</label>
                <input type="text" value="20%"/>
              </div>
            </div>
          </div>

          <div class="columns-plans mr-30">
            <p>Plano 3</p>
            <input type="text" value="Jóias"/>
            <p>Descrição</p>
            <textarea rows="3">Para quem gosta de rótulos sofisticados e quer descobrir novos vinhos, mais raros.</textarea>
            <p>Regras</p>
            <div class="inline_flex">
              <div class="qtd-km">
                <label>Quantidade de Km</label>
                <input type="text" value="100"/>
              </div>
              <div>
                <label>Sem troca de Km + %</label>
                <input type="text" value="20%"/>
              </div>
            </div>
          </div>
        </div>

        <div class="rows-plans-price">
          <div class="inline_flex">
            <div class="price-km pr-10 pl-30">
              <p>Valores(R$)</p>
              <input class="mb-10" type="text" value="119,00"/>
              <input class="mb-10" type="text" value="239,00"/>
              <input class="mb-10" type="text" value="359,00"/>
            </div>
            <div class="mr-10 pt-28">
              <br>
              <input class="mb-10" type="text" value="119,00"/>
              <input class="mb-10" type="text" value="239,00"/>
              <input class="mb-10" type="text" value="359,00"/>
            </div>
          </div>

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
          </div>
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
