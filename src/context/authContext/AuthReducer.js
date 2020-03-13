import { LOGIN_FAIL, LOGIN_SUCCESS, SET_ISAUTHENCATED } from '../types'

export default (state, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('dataUser', payload)
      return {
        ...state,
        ...payload,
        isAuthencated: true,
        loading: false,
        error: null
      }
    case LOGIN_FAIL:
      localStorage.removeItem('dataUser')
      return {
        ...state,
        isAuthencated: null,
        user: null,
        token: null,
        loading: false,
        error: payload
      }
    case SET_ISAUTHENCATED:
      return {
        ...state,
        isAuthencated: payload
      }
    default:
      return state
  }
};