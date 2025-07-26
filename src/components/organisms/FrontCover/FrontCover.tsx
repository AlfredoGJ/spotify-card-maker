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
import { SelectShowScannable } from "../../../state/editor/selectors";
import { useElementSize } from "../../../utils/hooks/useResize";

interface IFallbackLoaderProps {
  width?: number;
  height?: number;
}

interface IFrontCoverProps {
  textColor: Color;
  firstBgColor?: Color;
  secondBgColor?: Color;
  thirdBgColor?: Color;
  backgroundPreset: string;
  track: Track;
  coverData: string;
  playingTime: number;
  scannableData: string;
  fallback?: React.FC<IFallbackLoaderProps>;
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
    const showScannable = useSelector(SelectShowScannable);
    var isLoading = isCoverloading || isPaletteLoading || isTrackLoading;
    const {width, height} = useElementSize();
    // isLoading=true;
    return (
      <div className="front-container" id="resizable-target">
        <div
          ref={ref}
          style={{
            color: textColor ? `${textColor.values.hex}` : "white",
            background: backgroundPreset,
            borderRadius: "0.75rem",
          }}
        >
          {isLoading ? (
            <LoadingSkeleton aspectRatio="6/9" />
          ) : (
            <div className="p-[5%]">
              <AlbumCover src={coverData}></AlbumCover>
              <TitleAndArtist
                title={{ text: track.name, size: 0.07 }}
                artist={{ text: track.artists[0].name, size: 0.04 }}
              />
              <FavIcon />
              <SongPlayback
                duration_ms={track.duration_ms}
                currentTime={playingTime}
              />
              <PlayingControls />
              {showScannable && (
                <ScannableCode
                  className="mt-2 bg-gradient-to-tr"
                  data={scannableData}
                  relativeSize="big"
                  foregroundColor={textColor}
                />
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);
