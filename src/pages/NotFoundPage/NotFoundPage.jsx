import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>
        OHH no, 404, again. Go back to{" "}
        <Link to="/">
          Home
        </Link>
        .
      </p>
    </div>
  );
};
export default NotFoundPage;