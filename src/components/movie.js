import React from "react";

const IMG_API="https://image.tmdb.org/t/p/w1280";
const setVoteClass=(vote)=>{
    if(vote >= 8){
        return 'green'
    }else if(vote >= 6){
        return 'orange';
    }else {
        return 'red';
    }
}

const Movie=({title,poster_path,overview,vote_average,release_date})=>(

<div className="movie">
    <img src={poster_path ?IMG_API+ poster_path:'https://cdn.pixabay.com/photo/2017/07/27/15/24/movie-2545676_1280.jpg'} alt={title}/>
    <div className="movie-info">
        <h3>{title}</h3>
        <span className={`tag ${setVoteClass(vote_average)}`} >
            {vote_average}</span>
    </div>

    <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
        <h3>Release Date: {release_date}</h3>       
    </div>
     
    </div>
    );

export default Movie;