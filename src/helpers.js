export const numbers = (v) => {
  if (v === null) return null
  var n = String(v).replace(/[^0-9]/g, '')
  if (!n) return null
  return n
}

export const cpfMask = (v) => {
  if (v === null) return ''
  // workaround - cpf faltando zero no inicio
  if (v.length === 10) v = `0${v}`
  return String(v).replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4')
}

export const phoneMask = (v) => {
  var phone = numbers(v)
  if (v === null) return ''
  // Remove 0 do ddd, se existir
  if (/^0/ig.test(v)) phone = v.substr(1, v.length - 1)

  if (v.length === 11) {
    return String(phone).replace(/^(\d{2})(\d{5})(\d{4})/g, '($1)$2-$3')
  }
  return String(phone).replace(/^(\d{2})(\d{4})(\d{4})/g, '($1)$2-$3')
}

export const sanitize = (v) => {
  if (v === null || typeof v === 'undefined') return null
  if (v.length < 1) return null
  return v
}

