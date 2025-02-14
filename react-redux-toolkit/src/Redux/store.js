import {configureStore, createSlice} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { Provider } from 'react-redux'


export const store = configureStore({
    reducer:{
        counter: counterReducer // reducer store ke andar register ho rha hai
    },
})

// STEPS: 
// create store
// wrap app component under Provider
// create createSlice
// register reducer in store
