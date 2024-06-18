import { useEffect } from "react";
import { fetchTrendingMovies } from "../api/GetMovies-api";




function HomePage() {
    useEffect(() => {
    const getMovies = async () => {
       const data = await fetchTrendingMovies();
    }
    getMovies();
      }, []);
    
    return (
     <div>
      <h1> Trending today</h1>
    </div>
  );
};
export default HomePage;