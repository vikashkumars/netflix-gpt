import {createSlice} from "@reduxjs/toolkit";


const movivesSlice = createSlice({
    name : "movies",
    initialState :{
        nowPlayingMovies : null,
        trailerVideo : null,
    },
    reducers :{
        addNowPlayingMovies : (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) =>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo :(state, action) =>{
            state.trailerVideo = action.payload;
        },
    },
});

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies} = movivesSlice.actions;
export default movivesSlice.reducer;