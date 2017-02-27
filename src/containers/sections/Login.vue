<template>
  <div class="login center">
    <img src="../../assets/images/ipiranga_logo.png" class="login-logo mt-90" alt="Ipiranga logomarca"> <br>
    <div class="login-form border--white--1 pd-50 br-15 mt-90 center">
      <span class="typo-title--15 block left">Adicione seu usuário e senha para acessar.</span>
      <label for="username" class="mt-40 block left">Usuário</label>
      <input id="username" name="username" type="text" class="block full-width" autocomplete="off">
      <label for="password" class="mt-40 block left">Senha</label>
      <input id="password" type="password" class="block full-width" autocomplete="off">
      <input type="button" value="Entrar" class="bkg-white btn br-15 login-form-submit mt-40 btn--flat pd-15 btn-lg">
    </div>
  </div>

</template>
<script>
  export default {}
</script>
