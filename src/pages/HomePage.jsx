import { useEffect, useState } from "react";
import { GetMovies } from "../api/GetMovies-api";
import MoviesList from "../components/MovieList/MoviesList";


function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

    useEffect(() => {
        const getMovies = async () => {
          try {
               setIsLoading(true)
                  const data = await GetMovies();
                setMovies(data) 
               
            } catch (error) {
                setError(true)
            } finally {
                  setIsLoading(false)
            }
    
    }
        getMovies();
    }, []);
    
    return (
     <div>
      <h1> Trending today</h1>
            <MoviesList movies={movies} />
             {isloading && <p>Loading...</p>}
    </div>
  );
};

export default HomePage;