import React, { forwardRef, useEffect, useState } from "react";
import { Color } from "../../../types/types";
import { Album } from "../../../types/types";
import { AlbumCover } from "../../atoms/AlbumCover";
import { useResize } from "../../../utils/hooks/useResize";
import { TrackList } from "../../molecules/TrackList";
import { Palette } from "../../molecules/Pallete";
import millisecondsToHMS from "../../../utils/millisecondToHMS";
import getUTCDateFromString from "../../../utils/getUTCDateFromString";

interface IAlbumPosterProps {
  albumData: Album;
  coverData: string;
  scannableData: string;
  paletteData: Array<Color>;
  backgroundColor: Color;
  textColor: Color;
}

export const AlbumPoster = forwardRef<HTMLDivElement, IAlbumPosterProps>(
  (
    {
      albumData,
      coverData,
      scannableData,
      paletteData,
      backgroundColor,
      textColor,
    }: IAlbumPosterProps,
    ref
  ) => {
    const duration = millisecondsToHMS(
      albumData.tracks.reduce((acc, curr) => acc + curr.duration_ms, 0)
    );
    const releaseDate = getUTCDateFromString(albumData.release_date);
    const elementSize = useResize();

    useEffect(() => {});

    return (
      <div
        id="album-poster"
        className="bg-black p-[1.6%] aspect-[12/17] w-full h-full "
      >
        <div
          ref={ref}
          style={{
            backgroundColor: backgroundColor.values.hex,
            color: textColor.values.hex,
          }}
          className={`w-full h-full grid grid-rows-[62%_28%_10%] px-[10%] py-[8%]`}
        >
          <AlbumCover src={coverData} />
          <div className="grid grid-cols-4   pt-[5%] pb-[1%] max-h-full">
            {
              <div className="col-span-2">
                <TrackList
                  tracks={albumData.tracks}
                  textSize={elementSize.height * 0.0132}
                />
              </div>
            }
            <div className="col-span-2 flex flex-col justify-stretch">
              <div className="">
                <Palette
                  colors={paletteData}
                  colorWidth={elementSize.height * 0.045}
                />
              </div>
              <img
                alt="scannable"
                className="self-center w-[90%] pt-2 mr-[-4%]"
                src={`data:image/svg+xml;utf8,${encodeURIComponent(
                  scannableData
                )}`}
              ></img>
            </div>
          </div>
          <div className="flex w-full">
            <div
              style={{ fontSize: `${elementSize.height * 0.019}px` }}
              className="flex flex-col justify-end font-light w-5/12"
            >
              <div>{`${duration.hours ? `${duration.hoursToString}:` : ""}${
                duration.minutes ? duration.minutesToString : "00"
              }:${duration.seconds ? duration.secondsToString : "00"} / ${
                releaseDate.getDay() < 9
                  ? `0${releaseDate.getDay()}`
                  : releaseDate.getDay()
              } ${releaseDate
                .toLocaleString("en-us", { month: "long" })
                .toUpperCase()} ${releaseDate.getFullYear()} `}</div>
              <div>{`RELEASED BY: ${albumData.label.toUpperCase()}`}</div>
            </div>
            <div className="flex flex-col font-bold justify-end text-right w-7/12">
              <div
                className="font-semibold"
                style={{ fontSize: `${elementSize.height * 0.028}px` }}
              >
                {albumData.artists[0].name.toUpperCase()}
              </div>
              <div style={{ fontSize: `${elementSize.height * 0.04}px` }}>
                {albumData.name.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
