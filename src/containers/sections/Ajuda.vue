<template>
  <section class="help">
    <div class="flex-column">
      <card title="Pergunta">
        <textarea class="help-question" id="question" rows="10"></textarea>
      </card>
      <card title="Resposta">
        <textarea class="help-answer" id="answer" rows="10"></textarea>
      </card>
      <button @click="openModal()" class="btn btn--flat btn-default bkg-shiraz c-white br-15 mt-30">ADICIONAR</button>
      <button @click="openModal()" class="btn btn--flat btn-default bkg-shiraz c-white br-15 mt-30">SALVAR</button>
    </div>
    <card title="Ajuda">
      <ul class="faq-questions">
        <faq-accordion v-for="item in items" :question="item" :key="item.id"></faq-accordion>
      </ul>
    </card>
    <PopUpSalvar v-if="modalOpened" @closeModal="closeModal">
    </PopUpSalvar>
    <PopUpExcluir v-if="modalOpened" @closeModal="closeModal">
    </PopUpExcluir>
  </section>
</template>

<script>
  import FaqAccordion from 'components/FaqAccordion'
  import Card from 'components/Card'
  import PopUpSalvar from 'components/PopUpSalvar'
  import PopUpExcluir from 'components/PopUpExcluir'
  import {mapState} from 'vuex'
  export default {
    components: {
      FaqAccordion,
      Card,
      PopUpSalvar,
      PopUpExcluir
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
    },
    computed: {
      ...mapState({
        items: (state) => state.faqQuestions
      })
    }
  }
</script>
