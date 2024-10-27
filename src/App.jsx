import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/movie">Movie</NavLink>
    </div>
  );
}

export default App;
