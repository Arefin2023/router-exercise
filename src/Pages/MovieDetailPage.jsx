import { useParams } from "react-router-dom";
import { movies } from "../data/movies";
import { Link } from "react-router-dom";
export function MovieDetailPage() {
  const { movieID } = useParams();
  console.log(movieID);
  const filteredMovies = movies.filter((movie) => {
    return movieID == movie.id;
  });
  console.log(filteredMovies);
  const movie = filteredMovies[0];
  if (movie) {
    return (
      <>
        <h1>Details of the Movie</h1>
        <section>
          <h4>{movie.title}</h4>
          <img src={movie.image} alt={"image of the movie" + movie.title} />
          <ul>
            {movie.cast.map((item) => {
              return <li key={item.id}>{item.character};</li>;
            })}
          </ul>
        </section>

        <Link to="/">Home</Link>
        <Link to="/actors">Actors</Link>
      </>
    );
  }
  return <p>Nothing to show</p>;
}
