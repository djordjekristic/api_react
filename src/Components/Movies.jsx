import { useState } from "react";
import axios from "axios"

const Movies = () => {
  let [movieName, setMovieName] = useState();

  const searchMovieByTitle = () => {
    axios.get(`${process.env.REACT_APP_OMDBAPI_URL}?t=${movieName}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error) )
  };
  return (
    <>
      <input onInput={(e) => setMovieName(e.currentTarget.value)} type="text" />
      <button onClick={searchMovieByTitle} type="button">
        Search movie
      </button>
    </>
  );
};
export default Movies;
