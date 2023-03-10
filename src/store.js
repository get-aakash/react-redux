import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "./itemSlice"


 const  store = configureStore({
    reducer:{
        //place your data as a slice
        item: itemReducer

    }
})
export default store