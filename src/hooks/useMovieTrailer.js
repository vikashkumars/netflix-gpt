import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect, useState } from "react";

const useMovieTrailer = (movieId) =>{
//Fetching trailer video && updating the store with trailer video data
    //get trailer id
    const [trailerId, setTrailerId] = useState(null);
    //store trailer in the redux store(redux)
    const dispatch = useDispatch();
    
  // fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json);
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    setTrailerId(trailer.key);
    //dispatch an action
    dispatch(addTrailerVideo(trailer));
    console.log(trailer);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;