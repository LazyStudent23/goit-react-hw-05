import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmZlNTgwNjI3NzNmNTJkYzZjYmI4Y2YzY2I3MWIzOSIsIm5iZiI6MTczMDM1MDYwMC4xMzMxOTY2LCJzdWIiOiI2NzFlOGU1NGZlZmQxZTA1MTAwMDg0NTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MbnR_9UqsWIglie3SyHkNEkg85hpTbxIpl71L69LGGQ",
  },
});

export const getTrendings = async () => {
  const { data } = await instance.get("trending/movie/day");
  return data;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await instance.get("search/movie", { params: { query } });
  return data;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}`);
  return data;
};

export const getMovieCast = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}/credits`);
  return data;
};

export const getMovieReview = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}/reviews`);
  return data;
};