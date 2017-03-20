<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml" type="text/x-template">
  <div class="columns-plans mr-30 c-carnation full-width">
    <p>Plano {{numPlan}}</p>
    <input ref="inputPlan" type="text" v-bind:value="title" v-on:input="updateValue($event.target.value)"/>
    <p>Descrição</p>
    <textarea rows="3">{{description}}</textarea>
  </div>
</template>

<script>

  export default {
    props: {
      numPlan: {
        type: Number,
        default: 1
      },
      title: {
        type: String,
        default: 'Titulo'
      },
      description: {
        type: String,
        default: 'Descrição'
      }
    },
    methods: {
      updateValue: function (value) {
        this.$emit('inputPlan', value)
      }
    }
  }
</script>
