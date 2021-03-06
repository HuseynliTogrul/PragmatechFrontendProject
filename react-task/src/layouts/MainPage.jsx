import React, { useState } from "react";
import api from "../api";
import Search from "../components/SearchForm";
import MovieList from "../components/MovieList";
import Favorites from "../components/Favourites";
import FavListItem from "../components/FavListItem";

export default function MainPage() {
  const [films, setFilms] = useState([]);

  const onSearchHandle = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchStr = formData.get("search");

    try {
      const response = await api.getFilms(searchStr);
      setFilms(response.Search);
      console.log(response.Search);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div style={{width: '500px'}}>
          <Search onSearch={onSearchHandle} />
          <MovieList movies={films} />
        </div>

        <div style={{width: '200px'}}>
          <Favorites />
        </div>
      </div>
    </div>
  );
}
