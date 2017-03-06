<template>
  <section class="help">
    <div class="flex-column">
      <card title="Pergunta">
        <textarea class="help-question" id="question" rows="10"></textarea>
      </card>
      <card title="Resposta">
        <textarea class="help-answer" id="answer" rows="10"></textarea>
      </card>
      <button class="btn btn--flat btn-default bkg-shiraz c-white br-15 mt-30">Adicionar</button>
    </div>
    <card title="Ajuda">
      <ul class="faq-questions">
        <faq-accordion v-for="item in items" :question="item" :key="item.id"></faq-accordion>
      </ul>
    </card>
  </section>
</template>

<script>
  import FaqAccordion from 'components/FaqAccordion'
  import Card from 'components/Card'
  import {mapState} from 'vuex'
  export default {
    components: {
      FaqAccordion,
      Card
    },
    computed: {
      ...mapState({
        items: (state) => state.faqQuestions
      })
    }
  }
</script>
