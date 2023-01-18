import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementOne: (state) => {
      state.value += 1
    },
    decrementOne: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset : (state) =>{
        state.value = 0
    }
  },
})

export const { incrementOne, decrementOne, incrementByAmount , reset} = counterSlice.actions;
export default counterSlice.reducer;
export const counterValue = (state : RootState) => state.counterState.value;