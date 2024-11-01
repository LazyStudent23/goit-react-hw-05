import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReview } from "../../services/Api";

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
          {Array.isArray(movieReviews) && movieReviews.map(item => {
              return (
                //   <li><span>`Author: ${item.author}`</span>
                //   <span>`Text: ${item.content}`</span></li>
                <p key={item.id}>
                  <span>`Author: ${item.author}`</span>
                  <span>`Text: ${item.content}`</span>
                </p>
              );
          })}
    </div>
  );
};

export default Reviews;
