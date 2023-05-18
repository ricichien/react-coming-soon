import React from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import VideoBg from "../src/assets/video.mp4";

import "./styles.css";

const App = () => {
  return (
    <section className="page">
      {/* overlay */}
      <div className="overlay"></div>
      {/* video */}
      <video src={VideoBg} autoPlay loop muted></video>
      {/* counter */}
      <div className="page__content">
        <h1>Lauching Soon</h1>
        <h3>
          Leave your email and we'll let you know once the site goes live.
        </h3>
        {/* clock */}
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          className="flip-clock"
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        {/* button */}
        <button className="btn">Notify Me</button>
      </div>
    </section>
  );
};

export default App;
