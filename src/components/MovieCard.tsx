import { useState } from "react";
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
        <button type="button" onClick={handleClickDetails}>
          <img src={movie.poster} alt={movie.title} />
        </button>
        <p>sortie: {movie.year}</p>

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
        </div>
        <div className={selected ? "details" : "hidden"}>
          <h3>{movie.quote}</h3>
          <p>Résumé</p>
          <p>{movie.summary}</p>
        </div>
      </article>
    </>
  );
}
