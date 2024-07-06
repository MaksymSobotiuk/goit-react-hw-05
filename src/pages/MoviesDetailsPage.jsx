import { useEffect, useState,  useRef } from "react";
import { useParams, Link, Outlet } from "react-router-dom"
import { GetSingleMovie} from "../api/GetMovies-api";

function MoviesDetailsPage() {
    const { movieId } = useParams();
 const [movie, setMovie] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const goBack = useRef(location.state ?? '/movies');

    useEffect(() => {
        const getData = async () => {
          try {
               setIsLoading(true)
                  const data = await GetSingleMovie(movieId);
                setMovie(data) 
            } catch (error) {
                setError(true)
            } finally {
                  setIsLoading(false)
            }
    
    }
        getData();
    }, [movieId]);


    return (
        
        <div>   <Link to={goBack.current}>
        Go back
      </Link> {movie && (
            <div>
 
                 <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : `http://www.suryalaya.org/images/no_image.jpg`
            }
            alt="Poster"
          />
             <h4>{movie.title}</h4>
                    <p>Overview: {movie.overview}</p>
                    <nav>
                        <Link to='cast'>cast</Link>
                        <Link to='reviews'>reviews</Link>
                    </nav>
                    <Outlet></Outlet>

                </div>
            )}
        
        </div>
    )
}









export default MoviesDetailsPage