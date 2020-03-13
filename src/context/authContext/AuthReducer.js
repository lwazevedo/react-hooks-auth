import { LOGIN_FAIL, LOGIN_SUCCESS, UPDATE_CONTEXT_AUTH } from '../types'
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
    case UPDATE_CONTEXT_AUTH:
      return {
        ...state,
        ...payload,
        loading: false,
        error: null
      }
    default:
      return state
  }
};