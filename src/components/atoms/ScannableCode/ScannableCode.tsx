import React, { FC, HTMLAttributes, HTMLProps } from "react";
import { Color } from "../../../types/types";
import colorScannable from "../../../utils/colorateScannable/colorScannable";

interface IScannableCodeProps extends HTMLAttributes<HTMLImageElement> {
  data: string;
  backgroundColor?: Color;
  foregroundColor?: Color;
  relativeSize?: "full" | "big" | "medium" | "small";
}

const styles = {
  relativeSize: {
    full: "w-full",
    big: "w-3/4",
    medium: "w-1/2",
    small: "w-1/4",
  },
};

export const ScannableCode: React.FC<IScannableCodeProps> = ({
  data,
  backgroundColor,
  foregroundColor,
  relativeSize = "full",
  className
}) => {
  const scannableData = colorScannable(
    data,
    backgroundColor?.values.hex || "#ff000000",
    foregroundColor?.values.hex || "#000000ff"
  );
  const size = styles.relativeSize[relativeSize];

  return (
    <div className="flex justify-center">
      <img
        className={`${className} ${size}`}
        alt="spotify-code"
        src={`data:image/svg+xml;utf8,${encodeURIComponent(scannableData)}`}
      />
    </div>
  );
};
