<template>
  <section class="help">
    <div class="card card-auto-height pd-40-vertical pd-40-horizontal card-white card-shadow">
      <div class="card-body">
        <div class="card-content">
          <!--<ul class="faq-questions">-->
            <!--&lt;!&ndash;<faq-accordion v-for="item in items" :question="item" :key="item.id"></faq-accordion>&ndash;&gt;-->
          <!--</ul>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import FaqAccordion from 'components/FaqAccordion'
  import {mapState} from 'vuex'
  export default {
    components: {FaqAccordion},
    computed: {
      ...mapState({
        items: (state) => state.faqQuestions
      })
    }
  }
</script>
