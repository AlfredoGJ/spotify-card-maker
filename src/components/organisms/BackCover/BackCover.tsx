import React, { forwardRef } from "react";
import "./back-cover.css";
import colorScannable from "../../../utils/colorateScannable/colorScannable";

import { Color } from "../../../types/types";

interface BackCoverProps {
  coverData: string;
  scannableData: string;
  scannableBackground: Color;
  scannableText: Color;
}

export const BackCover = forwardRef<HTMLDivElement, BackCoverProps>(
  (
    {
      scannableData,
      coverData,
      scannableBackground,
      scannableText,
    }: BackCoverProps,
    ref
  ) => {
    const scannable = colorScannable(
      scannableData,
      scannableBackground.values.hex,
      scannableText.values.hex
    );
    return (
      <div className="back-container" ref={ref}>
        {/* <div className="back-body"> */}
        <div className="back-image-container">
          <img className="back-image" alt="back-image" src={coverData} />
        </div>
        <div className="back-code-container">
          <img
            className="back-code"
            alt="spotify-code"
            src={`data:image/svg+xml;utf8,${encodeURIComponent(scannable)}`}
          />
        </div>
        {/* </div> */}
      </div>
    );
  }
);
