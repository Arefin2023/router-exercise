import { Link } from "react-router-dom";
import { actors } from "../data/actors";

export function ActorsPage() {
  return (
    <>
      <h1>Actors Page</h1>

      {actors
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((actor) => {
          return (
            <>
              <h2>{actor.name}</h2>
            </>
          );
        })}
      <Link to="/">Home</Link>
      <Link to="/MoviesPage">Movies</Link>
    </>
  );
}
