import { createSlice } from "@reduxjs/toolkit";

const configSlice =  createSlice({
  name: 'config',
  initialState: {       
    theme: 'light',
    lang : 'en'

    },
    reducers: { 
        theme: (state, action) => {
            state.theme = action.payload;
        },
        changeLanguage: (state, action) => {
            state.lang = action.payload;
        }

    },
});
export const {changeLanguage, theme} = configSlice.actions;
export default configSlice.reducer;


