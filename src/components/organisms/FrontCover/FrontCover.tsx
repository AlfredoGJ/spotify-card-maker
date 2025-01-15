import React, { forwardRef, useRef, useState } from "react";
import { Color, Track } from "../../../types/types";
import "./front-cover.css";
import { ElementSizeContextProvider } from "../../../utils/hooks/useResize";
import { AlbumCover } from "../../atoms/AlbumCover";
import { TitleAndArtist } from "../../molecules/TitleAndArtist";
import { SongPlayback } from "../../molecules/SongPlayback";
import { PlayingControls } from "../../molecules/PlayingControls";

interface FrontCoverProps {
  textColor: Color;
  firstBgColor: Color;
  secondBgColor: Color;
  track: Track;
  onCoverLoad: (img: HTMLImageElement) => void;
}

export const FrontCover = forwardRef<HTMLDivElement, FrontCoverProps>(
  (
    {
      track,
      firstBgColor,
      secondBgColor,
      onCoverLoad,
      textColor = { name: "white", values: { r: 255, g: 255, b: 255 } },
    }: FrontCoverProps,
    ref
  ) => {
    function handleCoverLoad(event: React.SyntheticEvent<HTMLImageElement>) {
      onCoverLoad && onCoverLoad(event.target as HTMLImageElement);
    }

    return (
      <ElementSizeContextProvider>
        <div className="front-container">
          <div
            ref={ref}
            style={{
              color: textColor
                ? `rgb(${textColor.values.r}, ${textColor.values.g}, ${textColor.values.b})`
                : "white",
              background: firstBgColor
                ? `linear-gradient(150deg, rgb(${firstBgColor.values.r}, ${firstBgColor.values.g},${firstBgColor.values.b}) 0%, rgb(${secondBgColor.values.r},${secondBgColor.values.g},${secondBgColor.values.b}) 100%)`
                : "white",
            }}
          >
            <div className="front-body">
              <AlbumCover
                src={track?.album.images[0].url}
                onCoverLoad={handleCoverLoad}
              ></AlbumCover>
              <TitleAndArtist
                title={{ text: track.name, size: 0.075 }}
                artist={{ text: track.artists[0].name, size: 0.05 }}
              />
              <SongPlayback duration_ms={track.duration_ms} />
              <PlayingControls />
            </div>
          </div>
        </div>
      </ElementSizeContextProvider>
    );
  }
);
