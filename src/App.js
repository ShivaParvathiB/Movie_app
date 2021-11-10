import React,{useEffect,useState} from "react";
import Movie from "./components/movie";

const FEATURED_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

function App() {
  const [movies,setMovies]= useState([]);
  const [searchTerm, setSearchTerm]=useState('');
  const [totalResult, setTotalResult]=useState(0);

  useEffect(()=>{
   getMovies(FEATURED_API);
  },[]);

  const getMovies=(API)=>{
    fetch(API)
    .then((res)=>res.json())
    .then((data)=>{
      setTotalResult(data.total_results);
      setMovies(data.results);
    });
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    
    if(searchTerm){
getMovies(SEARCH_API+searchTerm);

  setSearchTerm("");
    }
  };

  const handleOnChange=(e)=>{
    setSearchTerm(e.target.value);
  };
    return(
      <>
      <header>
        <form onSubmit={handleOnSubmit}>
      <input  className="search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange}/>
      </form>
    </header>
    <div className="movie-container"> 
      {totalResult>0?movies.length>0&&movies.map((movie)=>
      <Movie key={movie.id} {...movie}/>
    ):<p>No movies match the search criteria</p>} </div>
    </>
    );
}


export default App;