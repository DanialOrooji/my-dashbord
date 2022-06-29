import stateReducer from './stateSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        openDrawer: stateReducer,
    }
})

export default store