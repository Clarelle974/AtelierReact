import { useState } from "react";
interface MoviesType {
    movie :{
        id:number; 
        title : string;
        year : number;
        genre : string;
        director: string;
        poster: string;
        quote : string;
        seen : boolean ;
        toWatch : boolean;
        note: number;
        summary:string;
    };
}

export default function MovieDetails ({ movie }: MoviesType) {
    
    
    return (
    <>
    <article className='details'>
    <h2>{movie.title}</h2>
    <h3>une quote célèbre</h3>
    <p>{movie.quote}</p>
    <h3>résumé :</h3>
    <p>{movie.summary}</p>
    </article>
    
    </>)
}