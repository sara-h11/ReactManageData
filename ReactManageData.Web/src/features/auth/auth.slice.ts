import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { authorizedApi } from 'utils/authorizedApi';

interface AuthState {
  loading : boolean,
  token : string,
  email : string
}

const initialState: AuthState = {
  loading : false,
  token :localStorage.getItem('token') || '',
  email : ""
}

export const login = createAsyncThunk('auth/login' ,
  async (dataLogin : any) => {
    const resp = await authorizedApi.post<{token :string}>(`auth/login` , dataLogin);
    localStorage.setItem('token' , resp.data.token);
    
    return {
        data : resp.data,
        email : dataLogin.email
    };
  });

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers : {
    logout : (state) => {
      state.token = "";
      state.email ="";
      localStorage.removeItem('token');
    }
  },
  extraReducers : (builder) => {
      builder.addCase( login.pending , (state) => {
        state.loading = true;
      });
      builder.addCase(login.fulfilled , (state , action) => {
        state.loading = false ;
        state.token = action.payload.data.token;
        state.email = action.payload.email
      });
      builder.addCase(login.rejected , (state , action) => {
        state.loading = true;
        console.log(action.error);
      })
  },
})

export const {logout } = authSlice.actions
export default authSlice.reducer;
export const authSelector = (state : RootState) => state.authState;