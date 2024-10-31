import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/Api";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCast(movieId);
        console.log(data);
        setCast(data.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCast();
  }, [movieId]);
  return (
    <div>
      <ul>
        {Array.isArray(cast) &&
          cast.map((item) => {
            return (
              <li key={item.cast_id}>
                <p>{item.character}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt=""
                />
                <p>{item.name}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cast;
