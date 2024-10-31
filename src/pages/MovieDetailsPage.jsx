import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/Api";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  console.log("location: ", location);

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

  const backHref = location.state?.from ?? "/";

  return (
    <div>
      <Link to={backHref}>Back </Link>
      {movieDetails !== null && (
        <div>
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.overview}</p>
          <p>{movieDetails.vote_average}</p>
        </div>
      )}
      <div>
        <Link to={"cast"}>Casts</Link>
        <Link to={"reviews"}>Reviews</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
