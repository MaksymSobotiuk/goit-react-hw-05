import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";
const key = "4432178e3b78d934b5e4ad5b6c409924";
const autorizationKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDMyMTc4ZTNiNzhkOTM0YjVlNGFkNWI2YzQwOTkyNCIsIm5iZiI6MTcyMDIyMjIxMS41ODA4OSwic3ViIjoiNjY3MTNhM2VkNWI2NTY5N2ZhMGRmNDM0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.GRdlQYSqBcP5xyiLLcEqV2aIxh3iRqobmLq6nU_a30E";


  
export const GetMovies = async () => {
  const response = await axios.get(`/trending/movie/day`, {
    params: {  client_id: key },
    headers: {
      Authorization: `Bearer ${autorizationKey}`,
    },
  });

  return response.data.results;
};


export const GetSingleMovie = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    params: { client_id: key },
    headers: {
      Authorization: `Bearer ${autorizationKey}`,
    },
  });

  return response.data;
};


export const GetMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    params: { client_id: key },
    headers: {
      Authorization: `Bearer ${autorizationKey}`,
    },
  });

  return response.data;
};

export const GetMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    params: { client_id: key },
    headers: {
      Authorization: `Bearer ${autorizationKey}`,
    },
  });

  return response.data;
};


export const searchMovieByName = async movieFilter => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieFilter}&include_adult=false&language=en-US&page=1`,
    {
    params: { client_id: key },
    headers: {
      Authorization: `Bearer ${autorizationKey}`,
    },
  });
  return response.data.results;
};

