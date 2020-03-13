import { LOGIN_FAIL, LOGIN_SUCCESS, SET_ISAUTHENCATED } from '../types'
import { setDataUser, removeDataUser } from '../../utils/localUserService';

export default (state, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      setDataUser(payload);
      return {
        ...state,
        ...payload,
        loading: false,
        error: null
      }
    case LOGIN_FAIL:
      removeDataUser();
      return {
        ...state,
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