
const MovieCard = ({movie}) =>{
    return(
        < div className="col-4 p-2 text-white">
        

          <img src={movie.Poster}  />
          <h1>{movie.Title}</h1>
          <h3>{movie.Year}</h3>
          
    
    
        </div>
    )
    
}
export default MovieCard