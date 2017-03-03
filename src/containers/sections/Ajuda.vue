<template>
  <section class="help">
    <div>
      <card title="Pergunta">
        <textarea class="help-question" id="question" rows="10"></textarea>
      </card>
      <card title="Resposta">
        <textarea class="help-answer" id="answer" rows="10"></textarea>
      </card>
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
