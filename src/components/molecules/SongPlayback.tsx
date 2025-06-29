import React from "react";
import { useElementSize } from "../../utils/hooks/useResize";
import millisecondsToHMS from "../../utils/millisecondToHMS";

interface ISongPlaybackProps {
  duration_ms: number;
  currentTime: number;
}

export const SongPlayback = ({
  duration_ms,
  currentTime = 50,
}: ISongPlaybackProps) => {
  const { height, width } = useElementSize();
  const durationDetails = millisecondsToHMS(duration_ms);
  const currentTimeMillis = (duration_ms * currentTime) / 100;
  const currentTimeDetails = millisecondsToHMS(currentTimeMillis);

  console.log("Duration:", durationDetails);
  return (
    <div className="flex flex-col">
      <div
        className="w-full relative rounded-md"
        style={{
          height: `${height * 0.01}px`,
        }}
      >
        <div
          className="absolute w-full h-full rounded-md "
          style={{ background: "rgba(180,180,180,0.3)" }}
        ></div>
        <div
          className="absolute h-full rounded-md"
          style={{ background: "currentColor", width:`${currentTime}%` }}
        ></div>
      </div>
      <div
        className="flex justify-between"
        style={{ fontSize: `${width * 0.04}px` }}
      >
        <div style={{ fontSize: `${height * 0.024}px` }}>{`${currentTimeDetails.minutes}:${currentTimeDetails.secondsString}`}</div>
        <div
          style={{ fontSize: `${height * 0.024}px` }}
        >{`${durationDetails.minutes}:${durationDetails.secondsString}`}</div>
      </div>
    </div>
  );
};
