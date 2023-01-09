import css from './Movies.module.css';
import { gettingFilmsByName } from 'services/filmApi';
import { useState } from 'react';

export const Movies = () => {
  const [filmLibrary, setFilms] = useState([]);
  const [query, setQuery] = useState('');

  const findFilm = event => {
    event.preventDefault();
    gettingFilmsByName(query).then(result => {
      setFilms([...result]);
      return;
    });
    return;
  };
  const onChange = event => {
    setQuery(event.target.value);
  };

  const path = 'https://image.tmdb.org/t/p/w500';
  return (
    <div>
      <form className={css.searchForm} onSubmit={findFilm}>
        <input
          type="text"
          name="search"
          className={css.input}
          placeholder="Film title"
          onChange={onChange}
        />
        <button type="submit" className={css.submitButton}>
          Find this film
        </button>
      </form>
      {filmLibrary ? (
        <div>
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
      ) : (
        <p>nothing here</p>
      )}
    </div>
  );
};
