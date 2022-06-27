import React from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    information : { 
        h1: ['hh'],
        imageSlide: [],
        textMain: [] 
    }
   
}
export const stateReducerAdd = createSlice({
    name: 'addArticle',
    initialState,
    reducers: {
        info: (state, action) => {
           state.information.h1.push("hellp")
        }
    },
})
export const { information, info
} = stateReducerAdd.actions
export default stateReducerAdd.reducer
//action.payload.payload.information.h1