<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="full-width mr-30 c-carnation">
    <div class="inline_flex">
      <div class="qtd-km">
        <label>Quantidade de Km</label>
        <input type="text" v-bind:value="km"/>
      </div>
      <div style="float:right">
        <label>Sem troca de Km + %</label>
        <input type="text" v-bind:value="percentage"/>
      </div>
    </div>
    <div class="inline_flex pr-20">
      <div class="mr-10">
        <p>Valores(R$)</p>
        <div v-for="(data, index) in teste">
          <input class="mb-10" type="text" :value="data.price[0].value"/>
        </div>


          <!-- <input class="mb-10" type="text" :value="data.price[0].value"/> -->

      </div>
      <div class="pt-28 pr-10">
        <br>
        <div v-for="total in Totails">
          <input class="mb-10 disabled" disabled type="text" :value="total"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        Totails: [1, 2, 3]
      }
    },
    methods: {
      Soma (perc, valor) {
        return perc * valor
      }
    },
    props: {
      teste: {
        type: Object,
        default: () => {}
      },
      km: {
        type: Number,
        default: null
      },
      percentage: {
        type: Number,
        default: null
      }
    }
  }
</script>
