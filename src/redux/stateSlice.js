import React from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
    open: false,
    check: false,
    h1: ['ری اکت چیست؟','چرا باید ری اکت را یاد بگیریم؟','همه چیز درباره ری اکت'],
    imageSlide: [],
    textMain: "hello",
    pageArticle: 1
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
        info: (state,Payload) => {
            state.h1.push(Payload.payload.h1)
        },
        setPage: (state,Payload) => {
            state.pageArticle=Payload.payload
        }
    },
})
export const { open, close, info, setPage, pageArticle 
} = stateReducer.actions
export default stateReducer.reducer
