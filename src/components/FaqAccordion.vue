<template>
    <li @click="toggleAccordion" class="accordion-item text-wrap">
        <div :class="['accordion-title', {open: isOpen}]">
            {{question.title}}
            <div v-if="!isOpen" :class="['action', {open: isOpen}]">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </div>
            <div v-if="isOpen" :class="['action', {open: isOpen}]">
                <i class="fa fa-minus" aria-hidden="true"></i>
            </div>
        </div>
        <div :class="['accordion-content', {open: isOpen}]">
            {{question.answer}}
            <div class="doc-table table-responsive mg-20-top">
                <table class="text-left">
                    <tbody>
                    <tr class="text-center">
                        <th rowspan="2" class="width-25 fs-15">Valores por quantidade de garrafas x categorias</th>
                        <th colspan="2" class="vertical-top width-25">Explorador</th>
                        <th colspan="2" class="vertical-top width-25">Seleção</th>
                        <th colspan="2" class="vertical-top width-25">Jóias</th>
                    </tr>
                    <tr>
                        <td class="vertical-top fs-12 text-center">Trocando 100 km</td>
                        <td class="vertical-top fs-12 text-center">Sem troca de km (+20%)</td>
                        <td class="vertical-top fs-12 text-center">Trocando 100 km</td>
                        <td class="vertical-top fs-12 text-center">Sem troca de km (+20%)</td>
                        <td class="vertical-top fs-12 text-center">Trocando 100 km</td>
                        <td class="vertical-top fs-12 text-center">Sem troca de km (+20%)</td>
                    </tr>
                    <tr class="fs-12 text-center">
                        <td class="fs-12 text-strong">DUAS GARRAFAS</td>
                        <td>R$ 119</td>
                        <td>R$ 143</td>
                        <td>R$ 199</td>
                        <td>R$ 239</td>
                        <td>R$ 299</td>
                        <td>R$ 359</td>
                    </tr>
                    <tr class="fs-12 text-center">
                        <td class="fs-12 text-strong">QUATRO GARRAFAS</td>
                        <td>R$ 239</td>
                        <td>R$ 287</td>
                        <td>R$ 399</td>
                        <td>R$ 479</td>
                        <td>R$ 599</td>
                        <td>R$ 719</td>
                    </tr>
                    <tr class="fs-12 text-center">
                        <td class="fs-12 text-strong">SEIS GARRAFAS</td>
                        <td>R$ 359</td>
                        <td>R$ 431</td>
                        <td>R$ 599</td>
                        <td>R$ 719</td>
                        <td>R$ 899</td>
                        <td>R$ 1.079</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            </span>
        </div>
        </div>
    </li>
</template>

<script>
  export default {
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      toggleAccordion () {
        this.isOpen = !this.isOpen
      }
    },
    props: {
      question: {
        type: Object,
        required: true
      }
    }
  }
</script>
