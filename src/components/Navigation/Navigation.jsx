import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import clsx from "clsx";



const Navigation = () => {
  return (
    <nav>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/movies"
        end
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation