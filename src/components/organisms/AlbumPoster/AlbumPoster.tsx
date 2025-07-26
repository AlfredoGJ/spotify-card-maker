import React, { forwardRef, ReactElement, ReactNode } from "react";
import { Color, Duration } from "../../../types/types";
import { Album } from "../../../types/types";
import { AlbumCover } from "../../atoms/AlbumCover";
import { TrackList } from "../../molecules/TrackList";
import { Palette } from "../../molecules/Pallete";
import getUTCDateFromString from "../../../utils/getUTCDateFromString";
import { DurationAndRelease } from "../../molecules/DurationAndRelease/DurationAndRelease";
import { TitleAndArtist } from "../../molecules/TitleAndArtist";
import { ScannableCode } from "../../atoms/ScannableCode/ScannableCode";
import { LoadingSkeleton } from "../../molecules/LoadingSkeleton/LoadingSkeleton";
import "./album-poster.css";
import { useSelector } from "react-redux";
import {
  SelectIsCoverDataLoading,
  SelectIsCoverPalleteLoading,
  SelectIsScannableDataLoading,
  SelectIsAlbumLoading,
} from "../../../state/albumPoster/selectors";
import Resizable from "../../../utils/ResizableHOC/Resizable";

interface IAlbumPosterProps {
  album: Album;
  coverData: string;
  scannableData: string;
  paletteData: Array<Color>;
  backgroundColor: Color;
  textColor: Color;
  frameColor?: Color;
  scannableColor?: Color;
  isLoading: boolean;
  Fallback: React.ReactNode;
}

export const AlbumPoster = forwardRef<HTMLDivElement, IAlbumPosterProps>(
  (
    {
      album,
      coverData,
      scannableData,
      paletteData,
      backgroundColor,
      textColor,
      frameColor,
      scannableColor,
      isLoading,
      Fallback,
    }: IAlbumPosterProps,
    ref
  ) => {
    const duration = Duration.fromMilliseconds(
      album.tracks.reduce((acc, curr) => acc + curr.duration_ms, 0)
    );
    const releaseDate = new Date(album.release_date)

    return (
      <div
        ref={ref}
        id="resizable-target"
        className="album-poster downloadable"
      >
        {isLoading ? (
          Fallback
        ) : (
          <div
            className="p-[1.6%] aspect-[12/17] w-full h-full "
            style={{
              backgroundColor: frameColor?.values.hex || "transparent",
            }}
          >
            <div
              style={{
                backgroundColor: backgroundColor.values.hex,
                color: textColor.values.hex,
              }}
              className={`w-full h-full grid grid-rows-[63%_37%] px-[9%] py-[6%]`}
            >
              <AlbumCover src={coverData} />
              <div className="grid grid-cols-[30%_30%_40%] grid-rows-[70%_30%]   pt-[5%] pb-[1%] max-h-full">
                <div className="col-span-2 col-start-1 row-start-1 overflow-y-visible mr-[4%] ">
                  <TrackList tracks={album!.tracks} />
                </div>

                <div className="col-start2 flex flex-col justify-stretch gap-6">
                  <div className="">
                    <Palette colors={paletteData} colorWidth={0.045} />
                  </div>
                  <ScannableCode
                    data={scannableData}
                    foregroundColor={scannableColor}
                  />
                </div>
                <div className="col-start-1 row-start-2 flex flex-col justify-end ">
                  <DurationAndRelease
                    duration={duration}
                    releaseDate={releaseDate}
                    label={album.label}
                  />
                </div>
                <div className="col-start-2 col-span-2 flex w-full justify-end text-right items-end ">
                  <TitleAndArtist
                    variant="AlbumPoster"
                    artist={{ text: album.artists[0].name, size: 0.028 }}
                    title={{ text: album.name, size: 0.05 }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
