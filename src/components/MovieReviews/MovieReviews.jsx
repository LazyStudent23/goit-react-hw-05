import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReview } from "../../services/Api";

import css from "./MovieReviews.module.css";
import Loader from "../Loader/Loader";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieReview(movieId);
        console.log(data);
        setMovieReviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);
  return (
    <div>
      {Array.isArray(movieReviews) && movieReviews.length === 0 && (
        <p>We don`t have any reviews for this movie</p>
      )}
      {isLoading && <Loader />}
      <ul className={css.ul}>
        {Array.isArray(movieReviews) &&
          movieReviews.map((item) => {
            return (
              <li key={item.id} className={css.li}>
                <h3>Author: {item.author}</h3>
                <p>Comment: {item.content}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Reviews;
