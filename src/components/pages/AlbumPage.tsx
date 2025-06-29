import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { Album, Color, ResourceType } from "../../types/types";
import { LoadingSkeleton } from "../molecules/LoadingSkeleton/LoadingSkeleton";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectAlbum,
  SelectCoverData,
  SelectIsAlbumLoading,
  SelectIsCoverDataLoading,
  SelectIsCoverPalleteLoading,
  SelectIsScannableDataLoading,
} from "../../state/albumPoster/selectors";
import {
  setAlbumAsync,
  setCoverDataAsync,
  setCoverPaletteAsync,
  setScannableDataAsync,
} from "../../state/albumPoster/albumPosterSlice";
import { AppDispatch } from "../../state/store";
import GenerateCardWidget from "../organisms/GenerateCardWidget";
import { AlbumPosterCustomizePanel } from "../templates/AlbumPosterCustomizePanel/AlbumPosterCustomizePanel";
import { OutputWidget } from "../organisms";
import downloadImage from "../../utils/DownloadImage";
import { AlbumPosterPreviewTemplate } from "../templates/AlbumPosterPreviewTemplate/AlbumPosterPreviewTemplate";

interface IColors {
  text: Color;
  background: Color;
}

export const AlbumPage = () => {
  const { albumId } = useParams();
  const albumRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();
  const album = useSelector(SelectAlbum);

  const isAlbumLoading = useSelector(SelectIsAlbumLoading);
  const isCoverPaletteLoading = useSelector(SelectIsCoverPalleteLoading);
  const isScannableDataLoading = useSelector(SelectIsScannableDataLoading);
  const isCoverDataLoading = useSelector(SelectIsCoverDataLoading);

  const loading =
    isAlbumLoading ||
    isCoverPaletteLoading ||
    isScannableDataLoading ||
    isCoverDataLoading;

  const [posterColors, setPosterColors] = useState<IColors>({
    text: {
      name: "black",
      values: { rgb: { r: 0, g: 0, b: 0 }, hex: "#000000" },
    },
    background: {
      name: "neutral",
      values: { rgb: { r: 229, g: 229, b: 229 }, hex: "#e5e5e5" },
    },
  });

  useEffect(() => {
    if (albumId) {
      dispatch(setAlbumAsync(albumId)).then((response) => {
        dispatch(
          setScannableDataAsync((response.payload as Album).scannables[0].uri)
        );
        dispatch(
          setCoverDataAsync((response.payload as Album).images[0].url)
        ).then((response) => {
          dispatch(setCoverPaletteAsync(response.payload as string));
        });
      });
    }
  }, [albumId, dispatch]);

  const handlePosterDownload = () => {
    let poster = albumRef.current! as HTMLDivElement;
    downloadImage(
      poster as HTMLDivElement,
      `${album?.name}- ${album?.artists[0].name}-poster`
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-6 grid gap-6 grid-cols-2">
      <div className="col-span-2 row-start-1 row-end-2 md:col-span-2">
        <GenerateCardWidget
          resourceType={ResourceType.Album}
          resourceId={albumId!}
          isLoading={loading}
        />
      </div>
      <div className="col-span-2 md:col-span-1 col-start-1 flex w-full h-full">
        <AlbumPosterPreviewTemplate />
      </div>
      <div className="col-span-2 md:col-span-1 col-start-1 h-max flex flex-col gap-6 w-full">
        {/* <LoadingSkeleton isLoading={isCoverPaletteLoading!}> */}
        <AlbumPosterCustomizePanel />
        {/* </LoadingSkeleton> */}
        <OutputWidget onDownloadClick={handlePosterDownload} />
      </div>
    </div>
  );
};
