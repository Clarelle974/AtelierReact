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
        summary:string;
    };
}

export default function MovieCard ({ movie }: MoviesType) {

    return (
        // {movie.map((movie)=>())}
    <>
    <h1>{movie.title}</h1>
    </>)
}