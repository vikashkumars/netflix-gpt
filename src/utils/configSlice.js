const configSlice = {
  name: 'config',
  initialState: {       
    theme: 'light', 

    },
    reducers: { 
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
};


