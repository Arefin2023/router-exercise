import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar";
export function RootLayout() {
  return (
    <>
      <header>
        <h1>React Router Demo</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright Taktsoft Campus</p>
      </footer>
    </>
  );
}
