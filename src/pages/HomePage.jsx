import { useEffect, useState } from "react";
import { getTrendings } from "../../services/Api";
import { Link, useLocation } from "react-router-dom";

import css from "./Home.module.css"
import Loader from "../Loader/Loader";  

const HomePage = () => {
  const [trendings, setTrendigs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendings();
        console.log(data);
        setTrendigs(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendings();
  }, []);

  return (
    <div className={css.wrapper}>
      <div className={css.trendingsWrapper}>
        <h1>Trendings Today</h1>
      </div>
      {isLoading && <Loader />}
      <ul className={css.ul}>
        {Array.isArray(trendings) &&
          trendings.map((item) => {
            return (
              <li key={item.id} className={css.li}>
                <Link
                  state={{
                    from: location,
                  }}
                  to={`/movies/${item.id}`}
                  className={css.link}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt=""
                    className={css.img}
                  />
                  <h2 className={css.h2}>{item.title}</h2>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default HomePage;
