<template>
  <section class="help">
    <div class="flex-column">
      <card class="label-question pt-20" title="Pergunta">
        <textarea class="help-question" id="question" rows="10"></textarea>
      </card>
      <card class="label-answer pt-20" title="Resposta">
        <textarea class="help-answer" id="answer" rows="10"></textarea>
      </card>
      <button @click="openModal()" class="btn btn--flat btn-default bkg-shiraz c-white br-15 mt-30">ADICIONAR</button>
      <button @click="openModal()" class="btn btn--flat btn-default bkg-shiraz c-white br-15 mt-30">SALVAR</button>
    </div>
    <card class="label-help pt-20" title="Ajuda">
      <div class="card-body">
      <ul class="faq-questions">
        <faq-accordion v-for="item in items" :question="item" :key="item.id"></faq-accordion>
      </ul>
      </div>
    </card>
    <PopUp v-if="modalOpened"
           :titleNot="modal.titleText"
           :btnCancel="modal.cancelText"
           :btnAction="modal.actionBtn"
           @closeModal="closeModal">
    </PopUp>
  </section>
</template>

<script>
  import FaqAccordion from 'components/FaqAccordion'
  import Card from 'components/Card'
  import PopUp from '../../components/PopUp'
  import {mapState} from 'vuex'
  export default {
    components: {
      FaqAccordion,
      Card,
      PopUp
    },
    data () {
      return {
        status: '',
        modalOpened: false,
        modal: {
          titleText: 'Tem certeza que deseja salvar as alterações?',
          cancelText: 'CANCELAR',
          actionBtn: 'SALVAR'
        }
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

<style>
  .help-question {
    height: 73px;
  }
  .help-answer {
    width: 449.5px;
    height: 521.5px;
  }
  .faq-questions {
    padding: 20px;
    padding-top: 10px;
  }
</style>
