import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container"

const Search = () =>{
    return(
    <>
    <form className="bg-dark text-white">
        <Container className="p-4">
        <FormGroup className="mb-1" controlId="formBasicTerm">
            <FormLabel>Movie Title</FormLabel>
            <FormControl type="text" placeholder="enter movie title"/>
        </FormGroup>
        <Button variant="primary" type="submit">
        Search
      </Button>

        </Container>
    </form>
    </>
    )
    
}

export default Search