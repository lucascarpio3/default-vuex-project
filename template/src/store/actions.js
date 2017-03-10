import {DEFAULT} from './mutations-types'
export default {
  actionDefault (context, value) {
    context.commit(DEFAULT, value)
  }
}
