import { Link } from "react-router-dom";
export function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/MoviesPage">Movies</Link>
      <Link to="/ActorsPage">Actors</Link>
    </>
  );
}
