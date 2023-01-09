import axios from 'axios';

const API_KEY = 'e20dc8db2a19ccc0feaf13905c82de4b';

const filmsApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const gettingFilm = async () => {
  const popularFilms = await filmsApi.get(`trending/movie/week`);
  const films = await popularFilms.data.result;
  console.log(films);
  return;
};
