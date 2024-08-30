import axios from "axios"


 
//https://www.omdbapi.com/?t=Terminator&apikey=7cbb12f4  primer API poziva


//fetch("https://www.omdbapi.com/?t=Terminator&apikey=7cbb12f4").
//then(response => response.json()).
//then(JsonResponse => console.log(JsonResponse))

console.log(process.env.REACT_APP_OMDBAPI_KEY);

axios.get("https://www.omdbapi.com/?t=Terminator&apikey=7cbb12f4")
.then(response => console.log(response.data))
.catch(error => console.log(error) )
  





const App = () =>{
   return(
    <>
    <p>test</p>
    </>
   )
}

export default App

