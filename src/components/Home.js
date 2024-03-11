import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/Home.css";
import backgroundVideo from "../media/background-video.mp4";

export const Home = () => (
  <div className="background-video-container">
    <div className="background-video-overlay"></div>
    <div className="background-video">
      <video
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
    <div className="background-video-content" id="home">
      <div className="title">
        <Typewriter
          options={{
            strings: ["Anna Liang"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <p className="description">I'm a developer.</p>
    </div>
  </div>
);
