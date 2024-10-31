import { useEffect, useState } from "react";
import { getTrendings } from "../../services/Api";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
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
    <div>
      <h1>Trendings Today</h1>
      <ul>
        {Array.isArray(trendings) &&
          trendings.map((item) => {
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

export default Home;
