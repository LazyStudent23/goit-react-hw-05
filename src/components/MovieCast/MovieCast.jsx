import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../services/Api";

import css from "./MovieCast.module.css"
import Loader from "../Loader/Loader";

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
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      <ul className={css.ul}>
        {Array.isArray(cast) &&
          cast.map((item) => {
            return (
              <li key={item.cast_id} className={css.li}>
                <p>{item.character}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.character}
                  className={css.img}
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
