<template>
  <li @click="toggleAccordion" class="accordion-item text-wrap">
    <div :class="['accordion-title', {open: isOpen}]">
      <div class="ellipsis-menu pl-10 pt-3 pr-10">
        <img src="../assets/images/more.png">
      </div>
      <div>
      {{question.title}}
      <div v-if="!isOpen" :class="['action', {open: isOpen}]">
        <i class="fa fa-plus" aria-hidden="true"></i>
      </div>
      <div v-if="isOpen" :class="['action', {open: isOpen}]">
        <i class="fa fa-minus" aria-hidden="true"></i>
      </div>
      </div>
    </div>
    <div :class="['accordion-content', {open: isOpen}]">
      {{question.answer}}
      <plan-table v-if="question.table && question.table.indexOf('plans') <= 0"></plan-table>
    </div>
  </li>
</template>
<script>
  import PlanTable from 'components/PlanTable'
  export default {
    mounted () {
      console.log(this.question)
    },
    components: {
      PlanTable
    },
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
