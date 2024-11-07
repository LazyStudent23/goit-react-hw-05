import { useEffect, useRef, useState } from "react";
import { getMovieDetails } from "../../services/Api";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

import css from "../MovieDetailsPage/MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

    const backHref = useRef(location.state?.from ?? "/");

  return (
    <div className={css.wrapper}>
      <Link to={backHref}>Back </Link>
      {isLoading && <Loader />}
      {movieDetails !== null && (
        <div>
          <h1>{movieDetails.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className={css.img}
          />
          <div>
            <h2>Overview</h2>
            <p>{movieDetails.overview}</p>
          </div>
          <div>
            <h3>Average rating: {movieDetails.vote_average}</h3>
          </div>
        </div>
      )}
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to={"cast"}>Casts</Link>
          </li>
          <li>
            <Link to={"reviews"}>Reviews</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
