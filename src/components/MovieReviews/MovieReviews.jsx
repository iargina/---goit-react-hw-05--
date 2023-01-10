import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gettingFilmReviews } from 'services/filmDetails';
import css from './MovieReviews.module.css';

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    gettingFilmReviews(movieId).then(response => setReviews([...response]));
  }, [movieId]);
  console.log(reviews);
  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Reviews</h3>
      <ul className={css.list}>
        {reviews.map(review => (
          <li key={review.id} className={css.item}>
            <p>
              <b>Author:</b> {review.author}
            </p>
            <p>
              <b>Review:</b> {review.content}
            </p>
            <p>
              <b>Rating:</b> {review.author_details.rating}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
