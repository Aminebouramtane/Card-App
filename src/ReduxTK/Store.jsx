import { configureStore } from '@reduxjs/toolkit'
import Productslice from "./Slices/ProductSlice"

const Store = configureStore({
    reducer:{
        products : Productslice
    }
})

export default Store