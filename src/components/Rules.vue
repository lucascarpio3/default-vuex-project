<template>
  <div class="full-width mr-30 c-carnation">
    <div class="inline_flex">
      <div class="qtd-km">
        <label>Quantidade de Km</label>
        <input type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' v-model="km"/>
      </div>
      <div style="float:right">
        <label>Sem troca de Km + %</label>
        <input type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' v-model="percents"/>
      </div>
    </div>

    <div class="inline_flex">
      <div class="mr-10">
        <p>Valores(R$)</p>
        <input class="mb-10" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' v-model="valorOne"/>
        <input class="mb-10" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' v-model="valorTwo"/>
        <input class="mb-10" type="text" onkeypress='return event.charCode >= 48 && event.charCode <= 57' v-model="valorThree"/>
      </div>
      <div class="pt-28">
        <br>
        <input class="mb-10 disabled" disabled type="text" v-model="totalOne"/>
        <input class="mb-10 disabled" disabled type="text" v-model="totalTwo"/>
        <input class="mb-10 disabled" disabled type="text" v-model="totalThree"/>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        percents: '',
        valorOne: '',
        valorTwo: '',
        valorThree: '',
        ValoresTotais: [0, 0, 0]
      }
    },
    methods: {
      setValures (newVal) {
        if (newVal.length) {
          newVal.map((value, index) => {
            switch (index) {
              case 0:
                this.valorOne = value.price[0].value
                break
              case 1:
                this.valorTwo = value.price[0].value
                break
              case 2:
                this.valorThree = value.price[0].value
                break
            }
          })
        }
      },
      setPercents (newVal) {
        if (newVal !== null || newVal !== '') {
          this.percents = newVal
        }
      },
      GetFomrData () {
        return null
      }
    },
    props: {
      DataRules: {
        type: Array,
        default: []
      },
      km: {
        type: Number,
        default: null
      },
      percentage: {
        type: Number,
        default: null
      }
    },
    watch: {
      DataRules (newVal) {
        this.setValures(newVal)
      },
      percents (newVal) {
        this.setPercents(newVal)
      }
    },

    mounted () {
      this.setValures(this.DataRules)
      this.setPercents(this.percentage)
    },
    computed: {
      totalOne () {
        return (this.valorOne * this.percents)
      },
      totalTwo () {
        return (this.valorTwo * this.percents)
      },
      totalThree () {
        return (this.valorThree * this.percents)
      }
    }
  }
</script>
