import { gettingFilm } from 'services/filmApi';
import { useState, useEffect } from 'react';

export const Home = () => {
  const [filmLibrary, setFilms] = useState([]);

  console.log(gettingFilm());

  return (
    <div className="container">
      <ul>
        {/*         {resultToRender.map(film => (
          <li id={film.id}>
            <h3>{film.title}</h3>
          </li>
        ))} */}
      </ul>
    </div>
  );
};
