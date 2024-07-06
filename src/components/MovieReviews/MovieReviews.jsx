import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetMovieReviews } from '../../api/GetMovies-api';

const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieReviews, setMovieReviews] = useState();
  const { movieId } = useParams();
  useEffect(() => {
    const getReviews = async () => {
      try {
        setIsLoading(true);
        const reviews = await GetMovieReviews(movieId);
        setMovieReviews(reviews);

        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {!isLoading && !error && movieReviews?.results.length === 0 && (
        <p>
          We don't have any reviews for this movie.
        </p>
      )}
      <ul>
        {movieReviews?.results.length > 0 &&
          movieReviews?.results.map(review => (
            <li key={review.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`}
                  alt={review.author}
                />
                <h3>{review.author}</h3>
              </div>
              <div>
                <p>{review.content}</p>
                <p>Rating: {review.author_details.rating}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};
export default MovieReviews;