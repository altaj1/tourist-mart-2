import { configureStore } from "@reduxjs/toolkit"

import searchTextSlice from "./features/searchText/searchTextSlice"
import paginationSlice from "./features/pagination/paginationSlice"
import cartSlice, { productId } from "./features/cart/cartSlice"

  const makeStore = () =>{
    return configureStore({
        reducer:{
           
            search:searchTextSlice,
            pagination: paginationSlice,
            productId: cartSlice
            
        }
    })
} 

export default makeStore