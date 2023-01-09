import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Routes, Route, Link } from 'react-router-dom';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <nav className={css.nav}>
        <Link className={css.link} to="/">
          Home
        </Link>
        <Link className={css.link} to="/movies">
          Movies
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        MovieDetails
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
