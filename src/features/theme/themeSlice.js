import { createSlice } from "@reduxjs/toolkit";

const initialColorState = {
    color: '',
};

export const themeSlice =  createSlice({
    name: 'theme',
    initialState: initialColorState,
    reducers : {
        changeTextColor: (state, action) => {
            state.color = action.payload
        }
    }
});
export const { changeTextColor } = themeSlice.actions;

export default themeSlice.reducer;