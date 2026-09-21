import React, { useEffect, useState, useContext, useReducer } from "react";
import StateContext from "../StateContext";
import MainTag from "./MainTag";

function Page(props) {
  const appState = useContext(StateContext);
  useEffect(() => {
    document.title = `Breaking It Down | ${props.title}`;
    document
      .getElementById("favicon")
      .setAttribute(
        "href",
        "../img/icon_heart_" + appState.redirectSelection + ".png"
      );
    window.scrollTo(0, 0);
  }, []);

  return <MainTag>{props.children}</MainTag>;
}

export default Page;
