<!--suppress XmlUnboundNsPrefix -->
<template lang="html">
  <div>
    <div class="columns-plans pr-30 c-carnation full-width">
      <p>Plano {{DataPlan.id}}</p>
      <input ref="inputPlan" type="text" v-bind:value="DataPlan.name" v-on:input="updateValue($event.target.value)"/>
      <p>Descrição</p>
      <textarea rows="3">{{DataPlan.description}}</textarea>
    </div>

    <div class="rows-plans-price">
      <Rules :km=DataPlan.groups[0].price[1].value
             :percentage=DataPlan.percentage
             :DataRules=DataPlan.groups
      ></Rules>
    </div>

  </div>
</template>

<script>
  import Rules from './Rules'

  export default {
    components: {
      Rules
    },
    props: {
      DataPlan: {
        type: Object,
        default: () => {
        }
      }
    }
  }
</script>

