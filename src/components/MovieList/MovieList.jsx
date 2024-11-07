import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css'
import noImage from "../../images/noImage.jpg";

const MovieList = ({movies}) => {
    console.log(movies);
    const location = useLocation();

  return (
    <ul className={css.ul}>
      {Array.isArray(movies) &&
        movies.map((item) => {
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
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : noImage
                  }
                  alt={item.title}
                  className={css.img}
                />
                <h2 className={css.h2}>{item.title}</h2>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default MovieList