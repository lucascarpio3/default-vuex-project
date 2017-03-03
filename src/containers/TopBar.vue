<template>
  <div class="top-bar">
    <div class="top-bar-left bkg-shiraz">
      <img class="logo" src="../assets/images/ipiranga_logo.png" alt="Ipiranga Confraria">
    </div>
    <div class="top-bar-right">
      <h1 class="faq ml-30 c-dove-gray" style="font-size: 28px; font-weight: normal;">{{titlePage}}</h1>
      <div class="logout ml-auto mr-156 c-carnation">
        LOGOUT
        <i class="fa fa-sign-out ml-10" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      titlePage: {
        type: String,
        required: true
      }
    }
  }
</script>
