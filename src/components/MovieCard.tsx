import { useState } from "react";
// import MovieDetails from "./MovieDetails";
interface MoviesType {
  movie: {
    id: number;
    title: string;
    year: number;
    genre: string;
    director: string;
    poster: string;
    quote: string;
    seen: boolean;
    toWatch: boolean;
    note: number;
    summary: string;
  };
}

<<<<<<< HEAD
export default function MovieCard({ movie }: MoviesType) {
  const [seen, setSeen] = useState(movie.seen);
  const handleClickSeen = () => {
    setSeen(!seen);
  };
  const [toWatch, setToWatch] = useState(movie.toWatch);
  const handleClickToWatch = () => {
    setToWatch(!toWatch);
  };

  const hundleClickAlert = () => {
    alert(movie.quote);
  };
  const [note, setNote] = useState("");
  const userNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNote(event.currentTarget.value);
  };
  const [selected, setSelected] = useState(false);
  const handleClickDetails = () => {
    setSelected(!selected);
  };

  return (
    <>
      <article className={seen ? "" : "gray"}>
        <h2>{movie.title}</h2>
        {/* <button type='button' onClick={hundleClickAlert}><img src={movie.poster} alt={movie.title} /></button> */}
=======
export default function MovieCard ({ movie }: MoviesType) {
    const [seen, setSeen] = useState(movie.seen);
    const handleClickSeen = () => {
      setSeen(!seen);
    };
    const [toWatch, setToWatch] = useState(movie.toWatch);
    const handleClickToWatch = () => {
      setToWatch(!toWatch);
    };
    
    // const hundleClickAlert=() => {
    //   alert(movie.quote)
    // }
    const [note, setNote] = useState("");
    const userNote = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setNote(event.currentTarget.value);
    }
    const [selected, setSelected] = useState(false);
  const handleClickDetails = () => {
    setSelected(!selected);
  };
    
    return (
        <>
        <article className= {seen ? "": "gray" }>
        <h2>{movie.title}</h2>
>>>>>>> 51895573db543d2e742d71c6382b1c87727dc211
        <button type="button" onClick={handleClickDetails}>
          <img src={movie.poster} alt={movie.title} />
        </button>
        <p>sortie: {movie.year}</p>
<<<<<<< HEAD

        <p>la note des utilisateurs: {(movie.note + Number(note)) / 2} / 10</p>
        <p>ma note: / 10</p>
        <input type="number" onChange={userNote} />
        <div className="classbouton">
          <input
            type="checkbox"
            id="seen"
            value="seen"
            onClick={handleClickSeen}
          />
          <label htmlFor="seen">vu</label>
          <input
            type="checkbox"
            id="toWatch"
            value="toWatch"
            onClick={handleClickToWatch}
          />
          <label htmlFor="toWatch">à voir</label>
=======
        
        <p>la note des utilisateurs: {(movie.note + Number(note))/2} / 10</p>
        <p>ma note:  / 10</p><input type='number' onChange={userNote} />
        <div className="classbouton">
        <input type="checkbox" id="seen" value="seen" onClick={handleClickSeen}/>
        <label htmlFor="seen">vu</label>
        <input type="checkbox" id="toWatch" value="toWatch" onClick={handleClickToWatch}/>
        <label htmlFor="toWatch">à voir</label>
>>>>>>> 51895573db543d2e742d71c6382b1c87727dc211
        </div>
        <div className={selected ? "details" : "hidden"}>
          <h3>{movie.quote}</h3>
          <p>Résumé</p>
          <p>{movie.summary}</p>
        </div>
<<<<<<< HEAD
      </article>
    </>
  );
}
=======
        </article>
        
        </>)
    }
>>>>>>> 51895573db543d2e742d71c6382b1c87727dc211
