import React from "react";
import { Duration } from "../../../types/types";
import { useElementSize } from "../../../utils/hooks/useResize";

interface IDurationAndReleaseProps {
  duration: Duration
  releaseDate: Date;
  label: string;
 
}

export const DurationAndRelease = ({ duration, releaseDate, label }: IDurationAndReleaseProps)  => {

    const {width} = useElementSize()
  return (
    <div
      style={{ fontSize: `${0.0175 * width}px`, lineHeight: `${0.022 * width}px` }}
      className="flex flex-col font-light whitespace-nowrap "
    >
      <div>{`${duration.hours ? `${duration.getStringHours()}:` : ""}${
        duration.minutes ? duration.getStringMinutes() : "00"
      }:${duration.seconds ? duration.getStringSeconds() : "00"} / ${
        releaseDate.getDay() < 9
          ? `0${releaseDate.getDay()}`
          : releaseDate.getDay()
      } ${releaseDate
        .toLocaleString("en-us", { month: "long" })
        .toUpperCase()} ${releaseDate.getFullYear()} `}</div>
      <div>{`RELEASED BY: ${label.toUpperCase()}`}</div>
    </div>
  );
};
