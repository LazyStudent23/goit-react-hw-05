import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Navigation from "./components/Navigation/Navigation";
import Loader from "./components/Loader/Loader";

import css from "./App.module.css";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/Cast/MovieCast"));
const MovieReviews = lazy(() => import('./components/Reviews/MovieReviews'));
const NotFoundPage = lazy(()=> import('./pages/NotFoundPage/NotFoundPage'))

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
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
