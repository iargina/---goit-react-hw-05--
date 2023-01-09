import { gettingFilm } from 'services/filmApi';
import { useState, useEffect } from 'react';
import css from './Home.module.css';

export const Home = () => {
  const [filmLibrary, setFilms] = useState([]);

  useEffect(() => {
    gettingFilm().then(result => {
      setFilms([...result]);
      return;
    });
  }, []);
  const path = 'https://image.tmdb.org/t/p/w500';

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {filmLibrary.map(film => (
          <li key={film.id}>
            <img src={path + film.poster_path} alt="" />
            <h3>{film.original_title}</h3>
            <p> Rating: {film.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
