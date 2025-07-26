import React, { forwardRef } from "react";
import "./back-cover.css";
import colorScannable from "../../../utils/colorateScannable/colorScannable";

import { Color } from "../../../types/types";
import { LoadingSkeleton } from "../../molecules/LoadingSkeleton/LoadingSkeleton";
import { useSelector } from "react-redux";
import { SelectIsCoverDataLoading, SelectIsScannableDataLoading } from "../../../state/track/selectors";

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

    const isCoverLoading = useSelector(SelectIsCoverDataLoading);
    const isScannableLoading = useSelector(SelectIsScannableDataLoading);

    return (
      <div className="back-container">
        <LoadingSkeleton  width={200} height={400}>
          <div
            className="back-container downloadable"
            ref={ref}
            id="resizable-target"
          >
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
        </LoadingSkeleton>
      </div>
    );
  }
);
