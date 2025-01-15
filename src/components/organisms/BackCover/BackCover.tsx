import React, { forwardRef } from "react";
import "./back-cover.css";

interface BackCoverProps {
  imgUri: string;
  scannableUri: string;
}

export const BackCover = forwardRef<HTMLDivElement, BackCoverProps>(
  ({ imgUri, scannableUri }: BackCoverProps, ref) => {
    return (
      <div className="back-container" ref={ref}>
        {/* <div className="back-body"> */}
        <div className="back-image-container">
          <img className="back-image" alt="back-image" src={imgUri} />
        </div>
        <div className="back-code-container">
          <img className="back-code" alt="spotify-code" src={scannableUri} />
        </div>
        {/* </div> */}
      </div>
    );
  }
);
