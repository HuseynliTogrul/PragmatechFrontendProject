import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../feautures/favListSlice";
import styles from "./MovieListItem.module.css";

export default function MovieItem({ movie, disable }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addMovie({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      })
    );
  };

  return (
    <div className={styles.cardFilm}>
      <img className={styles.poster} src={movie.Poster} alt={movie.Title} />
      <div className="movie-item__info">
        <h3 className="movie-item__title">
          {movie.Title} {`(${movie.Year})`}
        </h3>
        <p>{disable}</p>
        <button
          type="button"
          className="movie-item__add-button"
          disabled={disable}
          onClick={handleAdd}
        >
          Add to favorite list ⭐
        </button>
      </div>
    </div>
  );
}
