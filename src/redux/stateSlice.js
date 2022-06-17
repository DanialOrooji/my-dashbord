import React from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    open: false,
    check: false
  }
export const stateReducer = createSlice({
    name: 'openDrawer',
    initialState,
    reducers: {
        open: (state) => {
            state.open = true
            state.check =true
        },
        close: (state) => {
            state.open = false
            state.check =false
        },
    },
})
export const { open, close
} = stateReducer.actions
export default stateReducer.reducer
