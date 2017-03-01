import validate from 'validate.js'

export default {
  username: {
    presence: {message: 'Campo obrigatório'},
    length: {
      minimum: 6,
      message: 'nome precisa ter pelo menos 6 caracteres'
    }
  },
  password: {
    presence: {message: 'Campo obrigatório'},
    length: {
      minimum: 8,
      message: 'nome precisa ter pelo menos 6 caracteres'
    }
  },
  singleValidate (value, constraintName) {
    if (this[constraintName]) {
      return validate.single(value, this[constraintName])
    } else {
      return ['constraint não definida']
    }
  }
}

