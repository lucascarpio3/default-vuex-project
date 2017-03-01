<template>
  <div class="login center">
    <img src="../../assets/images/ipiranga_logo.png" class="login-logo mt-90" alt="Ipiranga logomarca"> <br>
    <form class="login-form border--white--1 pd-50 br-15 mt-70 center" @submit="signin">
      <span class="typo-title--15 block left">Adicione seu usuário e senha para acessar.</span>
      <label for="username" class="mt-40 block left">Usuário</label>
      <input v-model="credentials.username" @change="validateField" id="username" name="username" type="text"
             class="block full-width mt-2">
      <small v-if="errors.username">{{errors.username[0]}}</small>
      <label for="password" class="mt-40 block left">Senha</label>
      <input v-model="credentials.password" name="password" @change="validateField" id="password" type="password"
             class="block full-width mt-2">
      <small v-if="errors.password">{{errors.password[0]}}</small>
      <br>
      <input type="submit" value="ENTRAR" class="bkg-white btn br-15 login-form-submit mt-40 btn--flat pd-15 btn-lg c-cardinal">

    </form>
    <div class="login-bkg br-15"></div>
  </div>

</template>
<script>
  import validators from '../../validators'
  export default {
    data () {
      return {
        credentials: {
          username: '',
          password: ''
        },
        errors: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      signin (e) {
        e.preventDefault()
      },
      validateField (e) {
        console.log(e.target.name)
        this.errors[e.target.name] = validators.singleValidate(e.target.value, e.target.name)
      }
    }
  }
</script>
