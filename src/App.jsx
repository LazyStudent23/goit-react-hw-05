import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";

import css from "./App.module.css";

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./components/Cast/MovieCast"));
const MovieReviews = lazy(() => import('./components/Reviews/MovieReviews'));

function App() {
  return (
    <div className={css.mainPageWrapper}>
      <Navigation/>
      <Suspense fallback={<Loader/>}
        className={css.pagesWrapper}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews/>} />
          </Route>
          
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
