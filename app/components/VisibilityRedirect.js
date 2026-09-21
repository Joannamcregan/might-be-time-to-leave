import React, { useEffect, useContext } from "react";
import { redirect } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function VisibilityRedirect(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function redirect(destination) {
    appDispatch({ type: "redirect" });
  }

  useEffect(() => {
    let appDestination = appState.redirectSelection;
    document.addEventListener("visibilitychange", appDestination => {
      if (document.visibilityState === "hidden"){
        redirect(appDestination);
        localStorage.removeItem("selectedStyle");
      }
    });
    return () => {
      document.removeEventListener(
        "visibilitychange",
        redirect(redirectSelection)
      );
    };
  }, []);
  return <></>;
}

export default VisibilityRedirect;
