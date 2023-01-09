import css from './Movies.module.css';
export const Movies = () => {
  return (
    <>
      <form className={css.searchForm}>
        <input
          type="text"
          name="search"
          className={css.input}
          placeholder="Film title"
        />
        <button type="submit" className={css.submitButton}>
          Find this film
        </button>
      </form>
    </>
  );
};
