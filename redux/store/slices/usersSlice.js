import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('users/lists', async () => {
    try {
        let response = await fetch(`https://jsonplaceholder.com/users?limit=10`);
        return response.json();
    } catch (error) {
        return error.message
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: { list: [], status: 'pending' },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.list = action.payload;
            }).addCase(fetchUsers.rejected, (state) => {
                state.status = 'failed';
            })

    }
});

export default userSlice.reducer