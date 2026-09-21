import React, { useEffect } from "react";
import Page from "./Page";

function Risk() {
  return (
    <>
      <Page title="Understanding Your Risk">
        <h1>Signs of Increased Risk</h1>
        <p>
          Certain signs indicate that an abuser is more likely to commit murder.
          Abusers who don't show these signs could still kill you (or your kids,
          or your pets, or your loved ones.) However, if you answer yes to any of the questions on this list, your risk of death is likely greater
          than you realize.
        </p>
        <ul>
          <li>Has your partner threatened to kill you, your loved ones, or themselves?</li>
          <li>Have they talked (or joked) about having fantasies of killing you or others?</li>
          <li>Have they been making any kinds of threats more often than usual lately?</li>
          <li>Do they have access to guns or other deadly weapons?</li>
          <li>Have they ever choked or strangled you or someone else?</li>
          <li>Do they have a history of committing arson?</li>
          <li>Does your partner say things that make it sound like they “own” you?</li>
          <li>Do they depend on you more than most people depend on their partners?</li>
          <li>Have they acted increasingly abusive when you took steps to leave or increase your independence in the past?</li>
          <li>Are you currently pregnant and experiencing any type of abuse or coercion from them?</li>
          <li>Have they ever stalked you or someone else or taken someone hostage?</li>
          <li>Have they been especially depressed and expressing feelings of hopelessness?</li>
          <li>Are they facing a personal crisis, such as job loss, or public humiliation?</li>
          <li>Do they have a problem with drugs, alcohol, or other risky behavior that seems to be getting worse?</li>
        </ul>
      </Page>
    </>
  );
}

export default Risk;
