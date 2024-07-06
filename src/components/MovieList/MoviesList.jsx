import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  const moviesArray = Array.isArray(movies) ? movies : [];

  return (
    <ul>
      {moviesArray.map(({ id, title, movie }) => (
        <li key={id}>
          <div>
            <Link to={`/movies/${id}`} state={location}>
            {title}
          </Link>
          </div>
          
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

