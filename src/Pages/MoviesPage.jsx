import { movies } from "../data/movies";
import { Link } from "react-router-dom";
export function MoviesPage() {
  return (
    <>
      <h1>Movies Page</h1>
      <section>
        {movies.map((movie) => {
          return (
            <>
              <h2>
                <Link to={"/movies/" + movie.id}>{movie.title}</Link>
              </h2>
              <h4>{movie.tagline}</h4>
              <img
                src={movie.image}
                alt="A thumbnail image of the movie"
                {...movie.title}
              />
            </>
          );
        })}
      </section>

      <Link to="/">Home</Link>
      <Link to="/actors">Actors</Link>
    </>
  );
}
