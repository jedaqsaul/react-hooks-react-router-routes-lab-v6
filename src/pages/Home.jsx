import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  console.log(movies);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Home Page</h1>
      <main>
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} id={movie.id} />
        ))}
      </main>
    </>
  );
}

export default Home;
