import React from "react";
import { useResize } from "../../utils/hooks/useResize";
import millisecondsToHMS from "../../utils/millisecondToHMS";

interface ISongPlaybackProps {
  duration_ms: number;
}

export const SongPlayback = ({ duration_ms }: ISongPlaybackProps) => {
  const { height, width } = useResize();
  const duration = millisecondsToHMS(duration_ms);
  console.log("Duration:", duration);
  return (
    <div className="flex flex-col">
      <div
        className="w-full relative rounded-md"
        style={{
          height: `${height * 0.013}px`,
        }}
      >
        <div
          className="absolute w-full h-full rounded-md "
          style={{ background: "rgba(180,180,180,0.15)" }}
        ></div>
        <div
          className="absolute w-1/3 h-full rounded-md"
          style={{ background: "currentColor" }}
        ></div>
      </div>
      <div
        className="flex justify-between"
        style={{ fontSize: `${width * 0.04}px` }}
      >
        <div className="">1:02</div>
        <div className="">{`${duration.minutes}:${duration.seconds}`}</div>
      </div>
    </div>
  );
};
