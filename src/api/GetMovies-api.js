import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const key = "4432178e3b78d934b5e4ad5b6c409924";
const autorizationKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDMyMTc4ZTNiNzhkOTM0YjVlNGFkNWI2YzQwOTkyNCIsInN1YiI6IjY2NzEzYTNlZDViNjU2OTdmYTBkZjQzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1md583UGuC_XlGpD9wIN4U2ocUHzrwZsZzfDpNj8Eso";
export const fetchTrendingMovies = async () => {
  const data = await axios.get("/trending/movie/week", {
    params: { api_key: key },
    headers: {
      Authorization: `Bearer ${autorizationKey}`,
    },
  });

  return data;
};