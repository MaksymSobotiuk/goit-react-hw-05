import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { GetSingleMovie} from "../api/GetMovies-api";

function MoviesDetailsPage() {
    const { movieId } = useParams();
 
    useEffect(() => {
        if (!movieId) return
        const getData = async () => { await GetSingleMovie(movieId) }
        getData()
    }, [movieId])

    return (
        
        <div>MoviesDetailsPage</div>
    )
}









export default MoviesDetailsPage