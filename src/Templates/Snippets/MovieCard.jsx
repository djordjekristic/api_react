
const MovieCard = ({movie}) =>{
    return(
        <>
        <img src={movie.Poster}/>
          <h1>{movie.Title}</h1>
          <h3>{movie.Plot}</h3>
    
    
        </>
    )
    
}
export default MovieCard