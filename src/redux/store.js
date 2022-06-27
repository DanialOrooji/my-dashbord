import stateReducer from './stateSlice'
import stateReducerAdd from './addArticle'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        openDrawer: stateReducer,
        addArticle: stateReducerAdd
    }
})

export default store