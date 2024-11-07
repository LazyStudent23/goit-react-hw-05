import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getMoviesByQuery } from "../../services/Api";

import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MoviesPage = () => {
  const [movies, setMoviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParmas] = useSearchParams();
  const query = searchParams.get("query");

  const onSearch = (searchTerm) => {
    setSearchParmas({
      query: searchTerm,
    });
  };

  useEffect(() => {
    const fetchMovieByQuery = async () => {
      try {
        if (!query) return;
        setMoviews(null);
        setIsLoading(true);
        const data = await getMoviesByQuery(query);
        console.log(data);
        setMoviews(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieByQuery();
  }, [query]);

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <MovieList movies={movies} />
      {isLoading && <Loader />}
      {!isLoading && movies && movies.length === 0 && <NotFoundPage />}
    </div>
  );
};

export default MoviesPage;
