import { searchText } from "../searchText/searchTextSlice";

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name:'cart',
    initialState: {value:''},
    reducers:{
        productId:(state, action)=>{
            state.value = action.payload
        }
    }

})
export const {productId} = cartSlice.actions;
export default cartSlice.reducer;