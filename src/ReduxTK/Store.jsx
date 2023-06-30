import { configureStore } from '@reduxjs/toolkit'
import Productslice from "./Slices/ProductSlice"
import CradSlice from "./Slices/CradSlice"

const Store = configureStore({
    reducer:{
        products : Productslice,
        cards : CradSlice,
    }
})

export default Store