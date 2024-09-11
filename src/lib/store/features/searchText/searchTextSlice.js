const { createSlice } = require("@reduxjs/toolkit");

const searchTextSlice = createSlice({
    name:"searchText",
    initialState: {value : ''},
    reducers:{
        searchText:(state, action)=>{
            state.value = action.payload
        }
    }
})
export const {searchText} = searchTextSlice.actions;
export default searchTextSlice.reducer;