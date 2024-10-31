import { Link, useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getMoviesByQuery } from "../../services/Api";

const Movies = () => {
  const [movies, setMoviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParmas] = useSearchParams();
  const query = searchParams.get("query");

  const onSearch = (searchTerm) => {
    setSearchParmas({
      query: searchTerm,
    });
  };

  console.log("location: ", location);

  useEffect(() => {
    if (!query) return;

    const fetchMovieByQuery = async () => {
      try {
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
      <ul>
        {Array.isArray(movies) &&
          movies.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  state={{
                    from: location,
                  }}
                  to={`/movies/${item.id}`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
