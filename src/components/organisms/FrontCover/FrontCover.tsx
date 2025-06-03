import React, { forwardRef, useRef, useState } from "react";
import { Color, Track } from "../../../types/types";
import "./front-cover.css";
import { ElementSizeContextProvider } from "../../../utils/hooks/useResize";
import { AlbumCover } from "../../atoms/AlbumCover";
import { TitleAndArtist } from "../../molecules/TitleAndArtist";
import { SongPlayback } from "../../molecules/SongPlayback";
import { PlayingControls } from "../../molecules/PlayingControls";
import { LoadingSkeleton } from "../../molecules/LoadingSkeleton/LoadingSkeleton";
import { useSelector } from "react-redux";
import {
  SelectIsCoverDataLoading,
  SelectIsCoverPalleteLoading,
} from "../../../state/track/selectors";

interface IFrontCoverProps {
  textColor: Color;
  firstBgColor: Color;
  secondBgColor: Color;
  track: Track;
  coverData: string;
  gradientAngle: number;
}

export const FrontCover = forwardRef<HTMLDivElement, IFrontCoverProps>(
  (
    {
      track,
      firstBgColor,
      secondBgColor,
      textColor = {
        name: "white",
        values: { rgb: { r: 255, g: 255, b: 255 }, hex: "#ffffff" },
      },
      coverData,
      gradientAngle,
    }: IFrontCoverProps,
    ref
  ) => {
    const isCoverloading = useSelector(SelectIsCoverDataLoading);
    const isPaletteLoading = useSelector(SelectIsCoverPalleteLoading);

    return (
      <ElementSizeContextProvider>
        <div className="front-container downloadable" id="resizable-target">
          <LoadingSkeleton isLoading={isCoverloading || isPaletteLoading}>
            <div
              ref={ref}
              style={{
                color: textColor ? `${textColor.values.hex}` : "white",
                background: firstBgColor
                  ? `linear-gradient(${gradientAngle}deg, ${firstBgColor.values.hex} 0%, ${secondBgColor.values.hex} 100%)`
                  : "white",
              }}
            >
              <div className="front-body">
                <AlbumCover src={coverData}></AlbumCover>
                <TitleAndArtist
                  title={{ text: track.name, size: 0.075 }}
                  artist={{ text: track.artists[0].name, size: 0.05 }}
                />
                <SongPlayback duration_ms={track.duration_ms} />
                <PlayingControls />
              </div>
            </div>
          </LoadingSkeleton>
        </div>
      </ElementSizeContextProvider>
    );
  }
);
