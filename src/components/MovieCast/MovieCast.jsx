import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieCast } from '../../api/GetMovies-api';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      try {
        setIsLoading(true);
        const movieCast = await GetMovieCast (movieId);
        setCast(movieCast);

        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {!isLoading && !error && cast?.cast.length === 0 && (
        <p>
          We don't have any cast information for this movie.
        </p>
      )}
      <ul>
        {cast?.cast.length > 0 &&
          cast.cast.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w300${cast.profile_path}`
                    : `http://www.suryalaya.org/images/no_image.jpg`
                }
                alt={cast.name}
                width={200}
                height={300}
              />
              <div>
                <h4>{cast.name}</h4>
                <p>{cast.character}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default MovieCast;