import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increment: (state) => {
            state.counter += 1;
        }
    }
})

export const { increment } = Slice.actions;
export default Slice.reducer;