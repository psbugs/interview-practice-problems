import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        incrememt: (state) => {
            state.counter = state.counter + 1;
        },
        decrement: (state) => {
            state.counter = state.counter - 1;
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;