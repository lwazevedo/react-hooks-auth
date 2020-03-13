import React, { useReducer, useEffect } from 'react';


import fakeApi from '../../apis/calls';
import AuthReducer from './AuthReducer'
import AuthContext from './AuthContext';

import { LOGIN_FAIL, LOGIN_SUCCESS, UPDATE_CONTEXT_AUTH } from '../types';
import { getDataUser, removeDataUser, getRoles } from '../../utils/localUserService';

const AuthState = (props) => {
  const initialState = {
    ...getDataUser(),
    loading: null,
    error: null
  }
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    const userLogddin = getDataUser();
    if (userLogddin) dispatch({ type: UPDATE_CONTEXT_AUTH, payload: userLogddin })
  }, [])

  const login = async data => {
    try {
      const res = await fakeApi.post('/auth/login', data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data })
    } catch (e) {
      dispatch({
        type: LOGIN_FAIL,
        payload: e.response.data
      })
    }
  }

  const userAuthencated = () => Boolean(getDataUser());
  const logout = () => removeDataUser();
  const userRoles = () => getRoles();

  return (
    <AuthContext.Provider value={{ login, logout, userAuthencated, userRoles, ...state }}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthState;