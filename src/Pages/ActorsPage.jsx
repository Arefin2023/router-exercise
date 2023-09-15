import { Link } from "react-router-dom";
import { actors } from "../data/actors";

export function ActorsPage() {
  return (
    <>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <>
            <section>{actor.name}</section>
          </>
        );
      })}
      <Link to="/">Home</Link>
      <Link to="/MoviesPage">Movies</Link>
    </>
  );
}
