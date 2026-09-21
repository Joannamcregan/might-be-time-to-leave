import React, { useState, useEffect, useContext, useReducer } from "react";
import StateContext from "../StateContext";
import DispatchContext from "../DispatchContext";

function Overlay(props) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  function selectOption(e) {
    let redirectOptions = document.querySelectorAll(".redirect-option");
    for (let i = 0; i < redirectOptions.length; i++) {
      redirectOptions[i].checked = false;
    }
    setTimeout(() => {
      e.target.checked = true;
    }, 1);
  }

  return (
    <div id="overlay" className={appState.hasSelection ? "hidden" : ""}>
      <div id="overlay-content">
        <h1>Safety First</h1>
        <p>This site contains information about abusive relationships, including advice for how to leave them. <em>Please be aware that if an abuser suspects you are thinking about leaving them, your risk of being killed by them increases (even if they have never been physically violent before.)</em></p>
        <p><strong>
          If you need to quickly leave this page, press the Exit button at the bottom of the screen and we will redirect you to a different
          website.
        </strong></p>
        <p>
          We will also try to redirect you if we notice any sudden jerking
          movements from your mobile device. If you are using an iPhone, please
          click{" "}
          <span className="underline" onClick={() => {
              if (typeof DeviceMotionEvent.requestPermission === "function") {
                DeviceMotionEvent.requestPermission();
              }
            }}>
            here
          </span>{" "}
          so we can prompt you to give us permission to access information about
          your device's motions.
        </p>
        <div id="redirect-options-section">
          <p>
            If we need to redirect you, we would like to send you to a website
            that you would normally visit. Please select one of the following
            options.
          </p>
          <div id="redirect-selection-options">
            <input
              type="radio"
              id="cnn"
              name="redirect-selection"
              checked={appState.redirectSelection == "cnn"}
              value="cnn"
              className="redirect-option"
              onChange={selectOption}
            />
            <label htmlFor="cnn">CNN</label>
            <br></br>
            <input
              type="radio"
              id="nbcnews"
              name="redirect-selection"
              value="nbcnews"
              checked={appState.redirectSelection == "nbcnews"}
              className="redirect-option"
              onChange={selectOption}
            />
            <label htmlFor="nbcnews">NBC News</label>
            <br></br>
            <input
              type="radio"
              id="foxnews"
              name="redirect-selection"
              value="foxnews"
              checked={appState.redirectSelection == "foxnews"}
              className="redirect-option"
              onChange={selectOption}
            />
            <label htmlFor="foxnews">Fox News</label>
            <br></br>
            <input
              type="radio"
              id="aljazeera"
              name="redirect-selection"
              value="aljazeera"
              checked={appState.redirectSelection == "aljazeera"}
              className="redirect-option"
              onChange={selectOption}
            />
            <label htmlFor="aljazeera">Al Jazeera</label>
            <br></br>
          </div>
          <span
            id="redirect-selection-okay"
            onClick={() => {
              let selectedName = document.querySelector(
                'input[name="redirect-selection"]:checked'
              ).value;
              appDispatch({
                type: "setRedirectSelection",
                value: selectedName
              });
              setTimeout(() => {
                document.getElementById("overlay").classList.add("hidden");
                document.getElementById("exit").classList.remove("glow");
                document
                  .getElementById("favicon")
                  .setAttribute(
                    "href",
                    "../img/icon_heart_" + selectedName + ".png"
                  );
                window.scrollTo(0, 0);
              }, 200);
            }}
          >
            Okay
          </span>
        </div>
        <p>
          <em>
            <span>It's a good idea to clear your </span>
            <a
              href="https://www.privacyguides.org/articles/2025/02/13/clearing-browsing-data/#clearing-browsing-data-on-safari"
              target="_blank"
            >
              browsing
            </a>
            <span> and </span>
            <a
              href="https://www.security.org/digital-safety/search-history/"
              target="_blank"
            >
              search
            </a>
            <span>
              {" "}
              histories any time you are looking up information about DV or
              abuse.
            </span>
          </em>
        </p>
      </div>
    </div>
  );
}

export default Overlay;
