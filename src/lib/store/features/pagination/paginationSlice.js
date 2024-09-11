const { createSlice } = require("@reduxjs/toolkit");

const paginationSlice = createSlice({
    name: "currentPage",
    initialState:{value: 0},
    reducers: {
        increment: (state)=>{ state.value +=1},
        decrement:(state) =>{state.value -= 1},
        add: (state, action) =>{ state.value = action.payload}
    }
})
export const {increment, decrement, add} = paginationSlice.actions;
export default paginationSlice.reducer;