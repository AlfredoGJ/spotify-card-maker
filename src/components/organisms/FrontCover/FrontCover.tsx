import React, { forwardRef, useState } from "react";
import { Color, Track } from "../../../types/types";
import "./front-cover.css";
import { AlbumCover } from "../../atoms/AlbumCover";
import { TitleAndArtist } from "../../molecules/TitleAndArtist";
import { SongPlayback } from "../../molecules/SongPlayback";
import { PlayingControls } from "../../molecules/PlayingControls";
import { LoadingSkeleton } from "../../molecules/LoadingSkeleton/LoadingSkeleton";
import { useSelector } from "react-redux";
import {
  SelectIsCoverDataLoading,
  SelectIsCoverPalleteLoading,
  SelectIsTrackLoading,
} from "../../../state/track/selectors";
import { ScannableCode } from "../../atoms/ScannableCode/ScannableCode";
import { FavIcon } from "../../atoms/FavIcon/FavIcon";
import {
  createLinearGradient,
  createRadialGradient,
  presetGradient1,
  presetGradient2,
  presetGradient3,
} from "../../../utils/gradients/gradients";
import Resizable from "../../../utils/ResizableHOC/Resizable";

interface IFrontCoverProps {
  textColor: Color;
  firstBgColor?: Color;
  secondBgColor?: Color;
  thirdBgColor?: Color;
  backgroundPreset:string;
  track: Track;
  coverData: string;
  playingTime: number;
  scannableData: string;
}

export const FrontCover = forwardRef<HTMLDivElement, IFrontCoverProps>(
  (
    {
      track,
      backgroundPreset,
      textColor = {
        name: "white",
        values: { rgb: { r: 255, g: 255, b: 255 }, hex: "#ffffff" },
      },
      coverData,
      playingTime,
      scannableData,
    }: IFrontCoverProps,
    ref
  ) => {
    const isCoverloading = useSelector(SelectIsCoverDataLoading);
    const isPaletteLoading = useSelector(SelectIsCoverPalleteLoading);
    const isTrackLoading = useSelector(SelectIsTrackLoading);
    const isLoading = isCoverloading || isPaletteLoading || isTrackLoading;
    return (
      <Resizable>
        <div className="front-container downloadable" id="resizable-target">
          <LoadingSkeleton isLoading={isLoading} width={200} height={400}>
            <div
              ref={ref}
              style={{
                color: textColor ? `${textColor.values.hex}`: 'white',
                background:backgroundPreset
              }}
            >
              <div className="p-[5%]">
                <AlbumCover src={coverData}></AlbumCover>
                <TitleAndArtist
                  title={{ text: track.name, size: 0.07 }}
                  artist={{ text: track.artists[0].name, size: 0.04 }}
                />
                <FavIcon />
                <SongPlayback duration_ms={track.duration_ms} currentTime={playingTime} />
                <PlayingControls />
                <ScannableCode
                  className="mt-2 bg-gradient-to-tr"
                  data={scannableData}
                  relativeSize="big"
                  foregroundColor={textColor}
                />
              </div>
            </div>
          </LoadingSkeleton>
        </div>
      </Resizable>
    );
  }
);
