import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gettingFilmDetails } from 'services/filmDetails';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movieId);
  useEffect(() => {
    gettingFilmDetails(movieId).then(responce => setMovie(responce));
  }, [movieId]);

  console.log(movie);
  const posterPath = 'https://image.tmdb.org/t/p/w500';

  return (
    <div>
      <img src={posterPath + movie.poster_path} alt="" />
      <h3>{movie.original_title}</h3>
      <p>{movie.overview}</p>
    </div>
  );
};
