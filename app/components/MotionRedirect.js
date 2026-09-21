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
    alert('we are trying');
    let appDestination = appState.redirectSelection;
    function triggerRedirect(event, redirectSite){
      const { x, y, z } = event.acceleration || { x: 0, y: 0, z: 0 };
      if (x > 15 || y > 15 || z > 15){
        redirect(appDestination);
        redirect(redirectSite);
        localStorage.removeItem("selectedStyle");
        // console.log('log');
      }
    }
    document.addEventListener("devicemotion", appDestination => {
    // let motion = (event) => `${event.acceleration.x} m/s2 on x-axis, ${event.acceleration.y} m/s2 on y-axis, ${event.acceleration.z} m/s on z-axis`;
    // const { x, y, z } = event.acceleration || { x: 0, y: 0, z: 0 };
    //   if (event.acceleration.x > 15 ||
    //     event.acceleration.y > 15 ||
    //     event.acceleration.z > 15){
    //     redirect(appDestination);
    //     localStorage.removeItem("selectedStyle");
    //   }
    triggerRedirect(event, appDestination);
    });
    return () => {
      document.removeEventListener(
        "devicemotion",
        // redirect(redirectSelection)
        triggerRedirect(event, appDestination)
      );
    };
  }, []);
  return <></>;
}

export default MotionRedirect;
