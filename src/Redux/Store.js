import { configureStore } from "@reduxjs/toolkit";
import  TodoReducer from "./Slices/CountSlices"
export const Store=configureStore({
    reducer:{
        todo:TodoReducer
    }
})