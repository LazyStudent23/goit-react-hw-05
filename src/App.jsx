import css from "./App.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <div className={css.mainPageWrapper}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/movie"
      >
        Movie
      </NavLink>
      <div className={css.pagesWrapper}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviesPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
