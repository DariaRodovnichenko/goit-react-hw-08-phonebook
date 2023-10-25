import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAPI } from 'api';

import toast from 'react-hot-toast';

export const register = createAsyncThunk(
  'auth/register',
  async (credential, thunkAPI) => {
    try {
      const resp = await contactsAPI.registerUser(credential);
      contactsAPI.setAuthHeader(resp.data.token);
      toast.success('You are successfully registered in the system');

      return resp.data;
    } catch (error) {
      toast.error('Something went wrong, please try again');

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credential, thunkAPI) => {
    try {
      const resp = await contactsAPI.loginUser(credential);
      contactsAPI.setAuthHeader(resp.data.token);
      toast.success('You are successfully logged into the system');

      return resp.data;
    } catch (error) {
      toast.error('Something went wrong, please try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await contactsAPI.logoutUser();
    contactsAPI.clearAuthHeader();
    toast.success('You are now logout');
  } catch (error) {
    toast.error('Something went wrong, please try again');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) return thunkAPI.rejectWithValue('No valid token');

    contactsAPI.setAuthHeader(token);
    try {
      const resp = await contactsAPI.refreshUser();

      return resp.data;
    } catch (error) {
      toast.error('Something went wrong, please log in again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
