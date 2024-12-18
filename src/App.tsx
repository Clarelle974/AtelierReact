import "./App.css";
import { useState } from "react";

const movies = [
  {
    "id": 1,
    "title": "The Matrix",
    "year": 1999,
    "genre": "Science Fiction",
    "director": "Lana Wachowski, Lilly Wachowski",
    "poster": "https://m.media-amazon.com/images/I/91SZzvt+w4L._AC_SY879_.jpg",
    "quote": "There is no spoon.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A hacker discovers the world he lives in is a simulated reality and joins a rebellion to free humanity.",
    "duration": "2h16" // 136 minutes
  },
  {
    "id": 2,
    "title": "Titanic",
    "year": 1997,
    "genre": "Romance/Drama",
    "director": "James Cameron",
    "poster": "https://m.media-amazon.com/images/I/71svirLP6GL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "I'm the king of the world!",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A young artist falls in love with an aristocrat aboard the ill-fated R.M.S. Titanic.",
    "duration": "3h15" // 195 minutes
  },
  {
    "id": 3,
    "title": "Jurassic Park",
    "year": 1993,
    "genre": "Science Fiction/Adventure",
    "director": "Steven Spielberg",
    "poster": "https://m.media-amazon.com/images/I/71+csl5-uEL._AC_SY300_SX300_.jpg",
    "quote": "Life finds a way.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "Scientists create a dinosaur theme park, but chaos ensues when the creatures escape.",
    "duration": "2h07" // 127 minutes
  },
  {
    "id": 4,
    "title": "Pulp Fiction",
    "year": 1994,
    "genre": "Crime/Drama",
    "director": "Quentin Tarantino",
    "poster": "https://m.media-amazon.com/images/I/71mlgE7nUdL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "Say 'what' again. I dare you!",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "Interconnected stories of crime and redemption unfold in Los Angeles.",
    "duration": "2h34" // 154 minutes
  },
  {
    "id": 5,
    "title": "Forrest Gump",
    "year": 1994,
    "genre": "Drama",
    "director": "Robert Zemeckis",
    "poster": "https://m.media-amazon.com/images/I/71CuAt3ey+L._AC_SY300_SX300_.jpg",
    "quote": "Life is like a box of chocolates. You never know what you're gonna get.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A simple man recounts his extraordinary life and his impact on history.",
    "duration": "2h22" // 142 minutes
  },
  {
    "id": 6,
    "title": "The Lion King",
    "year": 1994,
    "genre": "Animation/Adventure",
    "director": "Roger Allers, Rob Minkoff",
    "poster": "https://m.media-amazon.com/images/I/51+FPXJo7yL._AC_SY300_SX300_.jpg",
    "quote": "Hakuna Matata!",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A lion cub learns about responsibility and courage after tragedy strikes his family.",
    "duration": "1h28" // 88 minutes
  },
  {
    "id": 7,
    "title": "Braveheart",
    "year": 1995,
    "genre": "Drama/War",
    "director": "Mel Gibson",
    "poster": "https://m.media-amazon.com/images/I/61fW-ZKUz8L.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "They may take our lives, but they'll never take our freedom!",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A Scottish warrior leads a rebellion against English rule in the 13th century.",
    "duration": "2h58" // 178 minutes
  },
  {
    "id": 8,
    "title": "Goodfellas",
    "year": 1990,
    "genre": "Crime/Drama",
    "director": "Martin Scorsese",
    "poster": "https://m.media-amazon.com/images/I/611mB9RFdTL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "As far back as I can remember, I always wanted to be a gangster.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "The rise and fall of a young man in the Mafia, and its toll on his family and associates.",
    "duration": "2h26" // 146 minutes
  },
  {
    "id": 9,
    "title": "Saving Private Ryan",
    "year": 1998,
    "genre": "Drama/War",
    "director": "Steven Spielberg",
    "poster": "https://m.media-amazon.com/images/I/516J6h5tn9L._AC_.jpg",
    "quote": "Earn this.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "During World War II, a group of soldiers embarks on a mission to save a paratrooper.",
    "duration": "2h49" // 169 minutes
  },
  {
    "id": 10,
    "title": "Fight Club",
    "year": 1999,
    "genre": "Drama",
    "director": "David Fincher",
    "poster": "https://m.media-amazon.com/images/I/61WD02KrZjL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "The first rule of Fight Club is: You do not talk about Fight Club.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A disillusioned man starts an underground fight club that spirals out of control.",
    "duration": "2h19" // 139 minutes
  },
  {
    "id": 11,
    "title": "The Sixth Sense",
    "year": 1999,
    "genre": "Thriller",
    "director": "M. Night Shyamalan",
    "poster": "https://m.media-amazon.com/images/I/51SG+DYx4gL._AC_SY300_SX300_.jpg",
    "quote": "I see dead people.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A young boy communicates with spirits, and a psychologist tries to uncover the truth.",
    "duration": "1h47" // 107 minutes
  },
  {
    "id": 12,
    "title": "Schindler's List",
    "year": 1993,
    "genre": "Drama/History",
    "director": "Steven Spielberg",
    "poster": "https://m.media-amazon.com/images/I/61QR3F5njdL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "Whoever saves one life, saves the world entire.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "The true story of a man who saved over a thousand Jews during the Holocaust.",
    "duration": "3h15" // 195 minutes
  },
  {
    "id": 13,
    "title": "The Silence of the Lambs",
    "year": 1991,
    "genre": "Thriller/Crime",
    "director": "Jonathan Demme",
    "poster": "https://m.media-amazon.com/images/I/61AWktF7L5L.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "An FBI trainee seeks help from a cannibalistic killer to catch another serial murderer.",
    "duration": "1h58" // 118 minutes
  },
  {
    "id": 14,
    "title": "Toy Story",
    "year": 1995,
    "genre": "Animation/Adventure",
    "director": "John Lasseter",
    "poster": "https://m.media-amazon.com/images/I/61bnjdMj1WL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "To infinity and beyond!",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A group of toys come to life and embark on an adventure to reunite with their owner.",
    "duration": "1h21" // 81 minutes
  },
  {
    "id": 15,
    "title": "Se7en",
    "year": 1995,
    "genre": "Thriller/Crime",
    "director": "David Fincher",
    "poster": "https://m.media-amazon.com/images/I/61b6hlnXLtL.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "What's in the box?!",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "Two detectives hunt a serial killer who uses the seven deadly sins as his motive.",
    "duration": "2h07" // 127 minutes
  },
  {
    "id": 16,
    "title": "The Big Lebowski",
    "year": 1998,
    "genre": "Comedy/Crime",
    "director": "Joel Coen, Ethan Coen",
    "poster": "https://m.media-amazon.com/images/I/71VARxHy4VL._AC_SY879_.jpg",
    "quote": "The Dude abides.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A laid-back bowler gets caught up in a kidnapping case by mistake.",
    "duration": "1h57" // 117 minutes
  },
  {
    "id": 17,
    "title": "Aladdin",
    "year": 1992,
    "genre": "Animation/Adventure",
    "director": "Ron Clements, John Musker",
    "poster": "https://m.media-amazon.com/images/I/618OqfxO4vL._AC_SY550_.jpg",
    "quote": "Do you trust me?",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A street rat finds a magic lamp and teams up with a genie to win the heart of a princess.",
    "duration": "1h30" // 90 minutes
  },
  {
    "id": 18,
    "title": "Terminator 2",
    "year": 1991,
    "genre": "Science Fiction/Action",
    "director": "James Cameron",
    "poster": "https://m.media-amazon.com/images/I/71FvVxuFR2L.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "Hasta la vista, baby.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A cyborg is sent back in time to protect a young boy from a more advanced robot.",
    "duration": "2h17" // 137 minutes
  },
  {
    "id": 19,
    "title": "The Truman Show",
    "year": 1998,
    "genre": "Comedy/Drama",
    "director": "Peter Weir",
    "poster": "https://m.media-amazon.com/images/I/71ncb9ccc+L._AC_SY300_SX300_.jpg",
    "quote": "Good morning, and in case I don't see you, good afternoon, good evening, and good night!",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A man discovers his entire life is a reality TV show and tries to escape.",
    "duration": "1h43" // 103 minutes
  },
  {
    "id": 20,
    "title": "Home Alone",
    "year": 1990,
    "genre": "Comedy/Family",
    "director": "Chris Columbus",
    "poster": "https://m.media-amazon.com/images/I/71w8NuY3x3L.__AC_SX300_SY300_QL70_ML2_.jpg",
    "quote": "Keep the change, ya filthy animal.",
    "seen": true,
    "toWatch": true,
    "note": 5,
    "summary": "A young boy defends his home from two burglars after being left behind by his family.",
    "duration": "1h43" // 103 minutes
  }
];

import MovieCard from "./components/MovieCard";
function App() {
  const [title, setTitle] = useState("");
  const handleChangeTitle= (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);}
  const filteredMovie = movies
    // .filter((movie) => (type === "" ? house : house.type === type))
    .filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase()));
  
  console.log(filteredMovie)
  return (
    <>
    <nav>
      <h1>CINE WILDERS 90'S</h1>
      </nav>
      <main>
      <section className="filter">
        <input
          type="text"
          placeholder="Cherchez un titre de film..."
          onChange={handleChangeTitle}
        /></section>
        <div className="vignettes">
        {filteredMovie.length ? (
          filteredMovie.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Aucun résultat</p>
        )}
        {/* {movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie}/>
      ))} */}

        </div>
      </main>
      <footer>Cours Forrest "COUUUURS"</footer>
    </>
  );
}

export default App;
