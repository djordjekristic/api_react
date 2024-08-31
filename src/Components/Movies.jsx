import { useEffect, useState } from "react";
import axios from "axios"
import MovieCard from "../Templates/Snippets/MovieCard";

const Movies = () => {
  let [movieName, setMovieName] = useState(" Lord of the rings");
  let[movieData,setMovieData] = useState({})

  const searchMovieByTitle = () => {
    axios.get(`${process.env.REACT_APP_OMDBAPI_URL}?t=${movieName}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`)
    .then(response =>setMovieData(response.data))
    .catch(error => console.log(error) )
};
  useEffect(() =>{
    searchMovieByTitle()
  },[])
   
  return (
    <>
    <form>
      <input onInput={(e) => setMovieName(e.currentTarget.value)} type="text" />
      <button onClick={searchMovieByTitle} type="button">Search movie</button>
    </form>
      <MovieCard movie={movieData}/>
    </>
  );
};
export default Movies;
