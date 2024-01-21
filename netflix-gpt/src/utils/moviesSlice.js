import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        UpcomingMovies:null,
        TopRateMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies:(state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addPopularMovies:(state, action) => {
            state.popularMovies = action.payload;
        },

        addUpcomingMovies:(state, action) => {
            state.UpcomingMovies = action.payload;
        },

        addTopRateMovies:(state, action) => {
            state.TopRateMovies = action.payload;
        },

        


        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;

        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addTopRateMovies} = movieSlice.actions;

export default movieSlice.reducer;