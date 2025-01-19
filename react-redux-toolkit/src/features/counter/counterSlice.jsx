import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value: 0
  },
  reducers: {
    increment: (state) => {// increment --> ak function hai
      
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) =>{
        state.value = 0
    },
    incrementByAmount: (state, action) => { // reducer function ak old state and action leta hai leke ak new state create krte hai
      state.value += Number(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,reset } = counterSlice.actions

export default counterSlice.reducer


