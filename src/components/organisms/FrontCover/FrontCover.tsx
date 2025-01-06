import React, { useRef } from "react";
import { ReactComponent as NextIcon } from "../../../assets/next.svg";
import { ReactComponent as PauseIcon } from "../../../assets/pause.svg";
import { ReactComponent as HearthIcon } from "../../../assets/heart.svg";

import { Color, Track } from "../../../types/types";
import "./front-cover.css";
import { ElementSizeContextProvider } from "../../../utils/hooks/useResize";
import { AlbumCover } from "../../atoms/AlbumCover";
import { TitleAndArtist } from "../../molecules/TitleAndArtist";
import { SongPlayback } from "../../molecules/SongPlayback";
import { PlayingControls } from "../../molecules/PlayingControls";

interface FrontCoverProps {
  firstBgColor: Color;
  secondBgColor: Color;
  track: Track;
  onCoverLoad: (img: HTMLImageElement) => void;
}

export const FrontCover = ({
  track,
  firstBgColor,
  secondBgColor,
  onCoverLoad,
}: FrontCoverProps) => {
  function handleCoverLoad(event: React.SyntheticEvent<HTMLImageElement>) {
    onCoverLoad && onCoverLoad(event.target as HTMLImageElement);
  }

  return (
    <ElementSizeContextProvider>
      <div
        className="front-container"
        style={{
          background: firstBgColor
            ? `linear-gradient(150deg, rgb(${firstBgColor.r}, ${firstBgColor.g},${firstBgColor.b}) 0%, rgb(${secondBgColor.r},${secondBgColor.g},${secondBgColor.b}) 100%)`
            : "white",
        }}
      >
        <div className="front-body">
          <AlbumCover
            src={track?.album.images[0].url}
            onCoverLoad={handleCoverLoad}
          ></AlbumCover>
          <TitleAndArtist
            title={{ text: track.name, size: 0.06 }}
            artist={{ text: track.artists[0].name, size: 0.05 }}
          />
          <SongPlayback duration_ms={track.duration_ms} />
          <PlayingControls />
        </div>
      </div>
    </ElementSizeContextProvider>
  );
};
