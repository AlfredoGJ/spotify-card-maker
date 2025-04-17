import React from "react";
import { SimplifiedTrack } from "../../types/types";

interface ITrackListProps {
  tracks: SimplifiedTrack[];
  textSize: number;
}

export const TrackList = ({ tracks, textSize }: ITrackListProps) => {
  return (
    <div
      style={{ fontSize: `${textSize}px` }}
      className="flex flex-col flex-wrap h-full font-semibold"
    >
      {tracks.map((track) => (
        <div className="max-w-[60%]" key={track.track_number}>{`${
          track.track_number
        }. ${track.name.toUpperCase()}`}</div>
      ))}
    </div>
  );
};
