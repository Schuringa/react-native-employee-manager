import { EMAIL_CHANGED } from './tpyes'

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}
