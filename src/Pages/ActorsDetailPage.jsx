import { Link } from "react-router-dom";
import { actors } from "../data/actors";
import { useParams } from "react-router-dom";
export function ActorsDetailPage() {
  const { actorID } = useParams();
  const actor = actors.find(({ id }) => {
    return id == actorID;
  });
  return (
    <>
      <h1>Actors Page</h1>
      <p>{actor.name}</p>
      <Link to="/">Home</Link>
      <Link to="/MoviesPage">Movies</Link>
    </>
  );
}
