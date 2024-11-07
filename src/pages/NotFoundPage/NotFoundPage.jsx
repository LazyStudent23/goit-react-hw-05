import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.notFound}>Page is not found!</p>
      <Link to="/" className={css.return}>
        Return to the home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
