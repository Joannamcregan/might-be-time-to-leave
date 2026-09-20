import React, { useEffect, useContext } from "react";
import { redirect } from "react-router-dom";
import DispatchContext from "../DispatchContext";
import StateContext from "../StateContext";

function MotionRedirect(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function redirect(destination) {
    appDispatch({ type: "redirect" });
  }

  useEffect(() => {
    let appDestination = appState.redirectSelection;
    document.addEventListener("devicemotion", appDestination => {
    let motion = (event) => `${event.acceleration.x} m/s2 on x-axis, ${event.acceleration.y} m/s2 on y-axis, ${event.acceleration.z} m/s on z-axis`;
      if (event.acceleration.x > 15 ||
        event.acceleration.y > 15 ||
        event.acceleration.z > 15){
        redirect(appDestination);
        localStorage.removeItem("selectedStyle");
      }
    });
    return () => {
      document.removeEventListener(
        "devicemotion",
        redirect(redirectSelection)
      );
    };
  }, []);
  return <></>;
}

export default MotionRedirect;
