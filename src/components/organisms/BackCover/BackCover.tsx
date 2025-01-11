import React from "react";
import "./back-cover.css";

interface BackCoverProps {
  imgUri:string
  scannableUri:string
}

export const BackCover = ({ imgUri, scannableUri }: BackCoverProps) => {
  return (
    <div className="back-container">
      {/* <div className="back-body"> */}
      <div className="back-image-container">
        <img
          className="back-image"
          alt="back-image"
          src={imgUri}
        />
      </div>
      <div className="back-code-container">
        <img
          className="back-code"
          alt="spotify-code"
          src={scannableUri}
        />
      </div>
      {/* </div> */}
    </div>
  );
};
