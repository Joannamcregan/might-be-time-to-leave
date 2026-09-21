import React, { useState, useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import StateContext from "../StateContext";

function Header(props) {
  const appState = useContext(StateContext);
  return (
    <>
      <header className={appState.redirectSelection}>
        <div id="header-content">
          <Link to="/">
            <img
              src="../img/heart_cnn.jpg"
              alt="a simple drawing of a heart with an EKG reading line"
              className={`logo ${appState.redirectSelection == "cnn" ? "" : "hidden"}`}
            />
            <img
              src="../img/heart_nbcnews.jpg"
              alt="three simple hearts--one half blue and half green, one half purple and half red, and one half orange and half yellow--are arranged in a clover shape"
              className={`logo ${appState.redirectSelection == "nbcnews" ? "" : "hidden"}`}
            />
            <img
              src="../img/heart_foxnews.jpg"
              alt="a white, pixelated heart appears with streaks and blobs of blue, white, and red light around it"
              className={`logo ${appState.redirectSelection == "foxnews" ? "" : "hidden"}`}
            />
            <img
              src="../img/heart_aljazeera.jpg"
              alt="a white heart with a swirly design in the center appears on an orange background"
              className={`logo ${appState.redirectSelection == "aljazeera" ? "" : "hidden"}`}
            />
          </Link>
          <Menu redirectSelection={appState.redirectSelection} />
        </div>
      </header>
    </>
  );
}

export default Header;
