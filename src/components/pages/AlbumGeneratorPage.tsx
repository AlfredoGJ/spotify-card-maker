import { AppDispatch, RootState } from "../../state/store";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setCoverDataAsync,
  setScannableDataAsync,
  setCoverPaletteAsync,
} from "../../state/track/trackSlice";

import React from "react";

import GenerateCardWidget from "../organisms/GenerateCardWidget";
import TrackCardBackPreviewTemplate from "../templates/TrackCardBackPreviewTemplate/TrackCardBackPreviewTemplate";
import TrackCardsFrontPreviewTemplate from "../templates/TrackFrontPreviewTemplate/TrackCardFrontPreviewTemplate";

const AlbumGeneratorPage = () => {
  console.log("Rendered Component: AlbumGeneratorPAge");
  const dispatch = useDispatch<AppDispatch>();

  const track = useSelector((state: RootState) => state.track.track);
  const coverData = useSelector((state: RootState) => state.track.coverData);

  useEffect(() => {
    if (track) {
      dispatch(setCoverDataAsync(track.album.images[0].url));
      dispatch(setScannableDataAsync(track.scannables[0].uri));
    }
  }, [track]);

  useEffect(() => {
    if (coverData) {
      dispatch(setCoverPaletteAsync(coverData));
    }
  }, [coverData]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-6 grid gap-6 grid-cols-1 md:grid-cols-2 ">
      <GenerateCardWidget className="col-span-1 md:col-span-2" />
      <TrackCardsFrontPreviewTemplate />
      <TrackCardBackPreviewTemplate />
    </div>
  );
};

export default AlbumGeneratorPage;
