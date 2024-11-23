import React from "react";
import { ReactComponent as NextIcon } from "./assets/next.svg";
import { ReactComponent as PauseIcon } from "./assets/pause.svg";
import { ReactComponent as HearthIcon } from "./assets/heart.svg";
import "./App.css";
import cover from "./assets/img/cover.jpeg";
import code from "./assets/img/code.jpeg";
import alternativeBackground from "./assets/img/cover.jpeg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="front-container">
          <img alt="cover" className="cover" src={cover}></img>
          <div className="title-and-artist">
            <div className="title">
              <b>Soulmates</b>
            </div>
            <div className="artist">Placebo</div>
          </div>
          <div className="heart">
            <HearthIcon fill="white" />
          </div>
          <div className="song-playback">
            <div className="playbar">
              <div className="playbar-background"></div>
              <div className="playbar-foreground"></div>
            </div>
            <div className="song-times">
              <div className="curren-time">2:52</div>
              <div className="total-time">4:16</div>
            </div>
          </div>
          <div className="play-controls">
            <NextIcon transform="rotate(180)" fill="white" />
            <PauseIcon fill="white" width={75} />
            <NextIcon fill="white" />
          </div>
        </div>
        <div className="back-container">
          <div className="back-image-container">
            <img className="back-image" alt="back-image" src={cover} />
          </div>
          <div className="back-code-container">
            <img className="back-code" alt="spotify-code" src={code} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
