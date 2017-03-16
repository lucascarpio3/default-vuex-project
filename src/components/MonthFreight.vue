<template>
  <div class="month-freight pt-20 pl-140">
    <div class="locais pl-10">
      <label>Locais</label><br>
      <textarea class="textarea-help mr-10" cols="14" rows="4">PR, RS, SC, SP, RJ, MG, ES</textarea>
      <textarea class="textarea-help mr-10" cols="14" rows="4">MS</textarea>
      <textarea class="textarea-help mr-10" cols="14" rows="4">DF</textarea>
      <textarea class="textarea-help mr-10" cols="14" rows="4">BA, GO, MT, TO</textarea>
      <textarea class="textarea-help mr-10" cols="14" rows="4">AC, AL, MA, PB, PE, PI, RN, RO, SE</textarea>
      <textarea class="textarea-help mr-10" cols="14" rows="4">AM, AP, CE, PA, RR</textarea>
    </div>
    <div class="precos pt-50 mr-30">
      <PlanTabPriceMonthFreight></PlanTabPriceMonthFreight>
      <button @click="openModal()"
              class="bkg-maroon-flush btn btn--flat pd-18 btn-default br-15 c-white psr-50 position--absolute">SALVAR
      </button>
      <Modal v-if="modalOpened" @closeModal="closeModal">
      </Modal>
    </div>
  </div>
</template>

<script>
  import PlanTabPriceMonthFreight from 'components/PlanTabPriceMonthFreight'
  import Modal from 'components/Modal'
  export default {
    components: {
      PlanTabPriceMonthFreight,
      Modal
    },
    data () {
      return {
        status: '',
        modalOpened: false
      }
    },
    methods: {
      openModal () {
        this.modalOpened = true
      },
      closeModal () {
        this.modalOpened = false
      }
    }
  }
</script>
