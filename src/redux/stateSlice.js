import React from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    open: false,
    check: false,
    h1: ['ری اکت چیست؟','چرا باید ری اکت را یاد بگیریم؟','همه چیز درباره ری اکت'],
    imageSlide: [],
    textMain: "hello"
}
export const stateReducer = createSlice({
    name: 'openDrawer',
    initialState,
    reducers: {
        open: (state) => {
            state.open = true
            state.check = true
            
        },
        close: (state) => {
            state.open = false
            state.check = false
        },
        info: (state) => {
            state.h1.push("Fuck to Yazd")
        }
    },
})
export const { open, close, info
} = stateReducer.actions
export default stateReducer.reducer
