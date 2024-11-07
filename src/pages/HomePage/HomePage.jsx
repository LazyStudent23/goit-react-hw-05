import { useEffect, useState } from "react";
import { getTrendings } from "../../services/Api";

import css from "./HomePage.module.css";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [trendings, setTrendigs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendings = async () => {
      try {
        if (trendings !== null) return;
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
      <MovieList movies={trendings} />
      {isLoading && <Loader />}
    </div>
  );
};

export default HomePage;
