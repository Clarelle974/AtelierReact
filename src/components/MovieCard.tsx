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

export default function MovieCard ({ movie }: MoviesType) {
    // const [seen, setSeen] = useState(movie.seen);
    // const handleClickSeen = () => {
    //   setSeen(!seen);
    // };
    // const [toWatch, setToWatch] = useState(movie.toWatch);
    // const handleClickToWatch = () => {
    //   setToWatch(!toWatch);
    // };
    return (
    <>
    <article>
    <img src={movie.poster} alt={movie.title} />
    <h2>{movie.title}</h2>
    <p>{movie.year}</p>
    
    <p>ma note : {movie.note} / 10</p>
    <input type="radio" id="seen" value="seen" checked />
    <label htmlFor="seen">vu</label>
    <input type="radio" id="toWatch" value="toWatch" checked />
    <label htmlFor="toWatch">à voir</label>
    
    </article>
    </>)
}