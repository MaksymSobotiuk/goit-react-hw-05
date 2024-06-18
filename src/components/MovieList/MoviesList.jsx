import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const moviesArray = Array.isArray(movies) ? movies : [];

  return (
    <ul>
      {moviesArray.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={location}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;