import React, { useEffect, useState, useContext, useReducer } from "react";
import StateContext from "../StateContext";

function MainTag(props) {
  const appState = useContext(StateContext);
  return <main className={appState.redirectSelection}>{props.children}</main>;
}

export default MainTag;
