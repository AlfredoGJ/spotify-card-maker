import React, { useEffect } from "react";
import { SimplifiedTrack } from "../../types/types";
import { useElementSize } from "../../utils/hooks/useResize";

interface ITrackListProps {
  tracks: SimplifiedTrack[];
  maxColumns?: number;
  tracksPerColumn?: number;
}

export const TrackList = ({
  tracks,
  maxColumns = 2,
  tracksPerColumn = 10,
}: ITrackListProps) => {
  const { width, height } = useElementSize();

  

  const textSizeBase = 0.016;
  const numCharacters = tracks.reduce(
    (acc, track) => acc + track.name.length,
    0
  );
  const textSize = textSizeBase - (numCharacters * 0.0015) / 110;
  const tpc = Math.floor(10 + textSize * height * 0.33);
  const firstColumn = tracks.slice(0, tpc);
  const secondColumn = tracks.slice(tpc, tracks.length);

  console.log("TCP", tpc);
  console.log("First Column Tracks:", firstColumn);
  console.log("Second Column Tracks:", secondColumn);
  return (
    <div className="grid grid-cols-2 gap-1 font-semibold ">
      <ol
        style={{
          listStylePosition: "inside",
          listStyleType: "decimal",

          fontSize: `${textSize * height}px`,
          lineHeight: `${textSize * height * 1.22}px`,
        }}
        className="display-flex"
      >
        {firstColumn.map((track) => (
          <li
            style={{}}
            // value={track.track_number}
            className=""
            key={`${track.track_number}-${track.name}`}
          >{` ${track.name.toUpperCase()}`}</li>
        ))}
      </ol>
      <ol
        start={firstColumn.length + 1}
        style={{
          listStylePosition: "inside",
          listStyleType: "decimal",

          fontSize: `${textSize * height}px`,
          lineHeight: `${textSize * height * 1.22}px`,
        }}
        className="display-flex"
      >
        {secondColumn.map((track) => (
          <li
            style={{}}
            // value={track.track_number}
            className=""
            key={`${track.track_number}-${track.name}`}
          >{` ${track.name.toUpperCase()}`}</li>
        ))}
      </ol>
    </div>
  );
};
