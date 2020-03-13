import React, { useReducer } from 'react';

import fakeApi from '../../apis/calls';
import AuthReducer from './AuthReducer'
import AuthContext from './AuthContext';


import { LOGIN_FAIL, LOGIN_SUCCESS, SET_ISAUTHENCATED } from '../types';


const AuthState = (props) => {
  const initialState = {
    ...localStorage.getItem('dataUser'),
    isAuthencated: null,
    loading: null,
    error: null
  }
  const [state, dispatch] = useReducer(AuthReducer, initialState);

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

  const setIsAuthencated = (value) => dispatch({ type: SET_ISAUTHENCATED, payload: value })

  return (
    <AuthContext.Provider value={{ login, setIsAuthencated, ...state }}>
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthState;