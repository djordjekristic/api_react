import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container"
import { useState } from "react"
import axios from 'axios'
import SearchResults from "../Templates/SearchResults"

const Search = () =>{

    let[movies,setMovies] = useState([])
    let[searchTerm,setSearchTerm] = useState()

    const searchMovies = () =>{
        
            axios.get(`${process.env.REACT_APP_OMDBAPI_URL}?s=${searchTerm}&apikey=${process.env.REACT_APP_OMDBAPI_KEY}`)
    .then(response => setMovies(response.data.Search))
    .catch(error => console.log(error) )
        
    }
    

    return(
    <>
    <form className="bg-dark text-white">
        <Container className="p-4">
        <FormGroup className="mb-1" controlId="formBasicTerm">
            <FormLabel>Movie Title</FormLabel>
            <FormControl onInput={e => setSearchTerm(e.currentTarget.value)} type="text" placeholder="enter movie title"/>
        </FormGroup>
        <Button onClick={searchMovies} variant="primary" type="button">
        Search
      </Button>

        </Container>
    </form>

    <SearchResults movies={movies}/>
    </>
    )
    
}

export default Search