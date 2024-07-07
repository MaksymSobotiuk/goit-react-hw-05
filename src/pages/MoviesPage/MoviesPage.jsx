import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../../components/MovieList/MoviesList';
import SearchFilms from '../../components/SearchFilms/SearchFilms';
import { searchMovieByName } from '../../api/GetMovies-api';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [params] = useSearchParams();
  const movieFilter = params.get('query') ?? '';

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await searchMovieByName(movieFilter);
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    if (movieFilter) {
      getData();
    } else {
      setMovies([]);
    }
  }, [movieFilter]);

  return (
    <div>
      <SearchFilms />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error occurred while fetching movies.</p>}
      {movies.length > 0 && <MoviesList movies={movies} />}
      {!movies.length && movieFilter && !isLoading && !error && (
        <p>Information is absent</p>
      )}
    </div>
  );
}

export default MoviesPage;