import React, { useState } from "react";
import { Link } from "react-router-dom";
import Page from "./Page";

function Home(props) {
  return (
    <Page title="Gain Clarity" redirectSelection={props.redirectSelection}>
      <>
        <h1>Breaking Down the Facts</h1>
        <p>
          Living through any type of abuse puts your brain in survival mode, which makes decision-making difficult. If that's you, please know that you're not weak, incapable, or stupid. You're dealing with the very real mental effects of trauma. The good news is, your brain can heal. You deserve healing, safety, freedom, peace, and happiness.
        </p>
        <p>
          <strong>This site exists to share knowledge that can help you navigate your situation more safely.</strong>
        </p>
        <p>
          <em>Please note: </em>when an abuser suspects that you are thinking about leaving, your <Link to="/risk">chances of being killed</Link> by them get significantly higher. Read our <span 
          className="underline"
          onClick={() => {
            document.getElementById("overlay").classList.remove("hidden");
            window.scrollTo(0, 0);
            document.getElementById("exit").classList.add("glow");
          }}
          >safety policy.</span>
        </p>
      </>
    </Page>
  );
}

export default Home;
