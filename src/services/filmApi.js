import axios from 'axios';

const API_KEY = 'e20dc8db2a19ccc0feaf13905c82de4b';

const filmsApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/trending/movie/day',
  params: {
    api_key: API_KEY,
    page: 1,
    per_page: 20,
  },
});

export const gettingFilm = async () => {
  const popularFilms = await filmsApi.get();
  const films = popularFilms.data.results;
  const filmArr = films.map(
    ({ id, poster_path, vote_average, original_title }) => ({
      id,
      poster_path,
      vote_average,
      original_title,
    })
  );
  return filmArr;
};
