<template>
  <div class="card ml-30">
    <h3 class="card-title">{{title}}</h3>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>
