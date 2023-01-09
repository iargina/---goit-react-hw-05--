import { gettingFilmCast } from 'services/filmDetails';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './MovieCast.module.css';

export const MovieCast = () => {
  const [actors, setActors] = useState([]);

  const { movieId } = useParams();
  const actorPath = 'https://image.tmdb.org/t/p/w500';
  useEffect(() => {
    gettingFilmCast(movieId).then(response => setActors([...response]));
  }, [movieId]);
  console.log(actors);
  return (
    actors.length > 0 && (
      <div className={css.actorsWrap}>
        <ul className={css.list}>
          {actors.map(actor => (
            <li key={actor.id}>
              {actor.profile_path ? (
                <img src={actorPath + actor.profile_path} alt={actor.name} />
              ) : (
                <img src="./images/photo_not_found.png" alt="no_photo" />
              )}

              {actor.character && (
                <p>
                  <b>Character:</b> {actor.character}
                </p>
              )}
              <p>
                <b>Name:</b> {actor.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
