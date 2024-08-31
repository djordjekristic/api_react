import axios from "axios"
import { useState } from "react";
import Movies from "./Components/Movies";
import Navigation from "./Templates/Snippets/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from "./Templates/Snippets/Footer";
import Search from "./Components/Search";
import SearchResults from "./Templates/SearchResults";



 

const App = () =>{
   
   return(
    <>
    <Navigation/>
    <Search/>
    <Footer/>
    
    </>
   )
}

  

export default App

