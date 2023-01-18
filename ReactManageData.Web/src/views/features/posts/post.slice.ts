import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from 'store/store'
import { PostProps } from 'domain/PostProps'
import { authorizedApi } from 'utils/authorizedApi'

interface PostState {
  page: number,
  pageSize : number,
  total : number ,
  loading : boolean,
  data : PostProps[]
}

const initialState: PostState = {
  page: 1,
  pageSize : 10,
  total : 0,
  loading : false,
  data : []
}

export const fetchData = createAsyncThunk('posts/fetchData' ,
async ({page , pageSize} : {page :number , pageSize :number} , thunkApi) => {
  // const {page , pageSize} = thunkApi.getState() as any;
  const resp = await authorizedApi.get<PostProps[]>(`posts?_page=${page}&_limit=${pageSize}`);
  
    return {
      data : resp.data ,
      total : resp.headers["x-total-count"] ,
      page ,
      pageSize
    };
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers : {
  },
  extraReducers : (builder) => {
      builder.addCase( fetchData.pending , (state) => {
        state.loading = true;
      });
      builder.addCase(fetchData.fulfilled , (state , action) => {
        state.loading = false ;
        state.data = action.payload.data;
        state.total = +action.payload.total!;
        state.page = action.payload.page;
        state.pageSize = action.payload.pageSize;
      });
      builder.addCase(fetchData.rejected , (state , action) => {
        state.loading = true;
        console.log(action.error);
      })
  },
})

// export const { setPage , setPageSize  } = postSlice.actions

// Other code such as selectors can use the imported `RootState` type
export default postSlice.reducer;
export const postSelector = (state : RootState) => state.postState;