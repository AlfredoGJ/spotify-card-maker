import React from "react";
import { Track } from "../../../types/types";
import "./back-cover.css";

interface BackCoverProps {
  track: Track;
}

export const BackCover = ({ track }: BackCoverProps) => {
  return (
    <div className="back-container">
      {/* <div className="back-body"> */}
      <div className="back-image-container">
        <img
          className="back-image"
          alt="back-image"
          src={track?.album.images[0].url}
        />
      </div>
      <div className="back-code-container">
        <img
          className="back-code"
          alt="spotify-code"
          src={track?.scannables[0].uri}
        />
      </div>
      {/* </div> */}
    </div>
  );
};
