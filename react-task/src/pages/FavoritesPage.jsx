import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import FavListItem from "../components/FavListItem";
import { selectFavs } from "../feautures/favListSlice";
import { selectFavName } from "../feautures/listNameSlice";

import Splide from "@splidejs/splide";

const FavoritesPage = () => {
  const favs = useSelector(selectFavs);

  const listName = useSelector(selectFavName);

  useEffect(() => {
    new Splide("#image-carousel").mount();
  }, []);

  return (
    <div>
      <h3>Your Favourites films</h3>
      <p>{listName}</p>
      {/* <ul>
        {favs.map((m) => (
          <li key={m.id}>
            <img src={m.poster} style={{width:"50px"}}/>
            <a href={"https://www.imdb.com/title/" + `${m.id}` + "/"} target="_blank">
              {m.id} ---- {m.title} ----- {m.year}
            </a>
            <FavListItem id={m.id} title={m.title} year={m.year} poster={m.poster}/>
          </li>
        ))}
      </ul> */}

      <section id="image-carousel" className="splide" aria-label="Beautiful Images">
        <div className="splide__track">
          <ul className="splide__list">
            {favs.map((m) => (
              <li key={m.id} className="splide__slide">
                <FavListItem
                  id={m.id}
                  title={m.title}
                  year={m.year}
                  poster={m.poster}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FavoritesPage;
