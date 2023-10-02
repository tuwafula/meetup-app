import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoriteCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/favorites">
            Favorites{" "}
            <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
          </Link>
        </li>
        <li>
          <Link to="/new-meetup">New Meetup</Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
