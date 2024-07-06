import { useEffect, useState,  useRef } from "react";
import { useParams, Link, Outlet, useLocation, NavLink } from "react-router-dom"
import { GetSingleMovie } from "../../api/GetMovies-api";
import css from "./MoviesDetailsPage.module.css"

function MoviesDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation()
    const backLocation = useRef(location.state ?? '/movies');

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



    // console.log(location);


    return (
        
        <div>
            
            <Link to={backLocation.current} > Go back</Link>
            
            {movie && (
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
                    <nav className={css.navContainer}>
                            <NavLink to='cast'>cast</NavLink>
                            <NavLink to='reviews'>reviews</NavLink>
                    </nav>
                    <Outlet></Outlet>

                </div>
            )}
        
        </div>
    )
}





NavLink



export default MoviesDetailsPage