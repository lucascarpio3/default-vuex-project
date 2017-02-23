<template>
    <li @click="toggleAccordion" class="accordion-item text-wrap">
        <div :class="['accordion-title', {open: isOpen}]">
            {{question.title}}
            <div v-if="!isOpen" :class="['action', {open: isOpen}]">+</div>
            <div v-if="isOpen" :class="['action', {open: isOpen}]">-</div>
        </div>
        <div :class="['accordion-content', {open: isOpen}]">
            {{question.answer}}
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
