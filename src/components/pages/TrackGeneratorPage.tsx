import { AppDispatch, RootState } from "../../state/store";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  setCoverDataAsync,
  setScannableDataAsync,
  setCoverPaletteAsync,
  setTrackAsync,
} from "../../state/track/trackSlice";

import { useParams } from "react-router";
import GenerateCardWidget from "../organisms/GenerateCardWidget";
import TrackCardBackPreviewTemplate from "../templates/TrackCardBackPreviewTemplate/TrackCardBackPreviewTemplate";
import TrackCardsFrontPreviewTemplate from "../templates/TrackFrontPreviewTemplate/TrackCardFrontPreviewTemplate";
import { ResourceType } from "../../types/types";

const TrackGeneratorPage = () => {
  console.log("Rendered Component: AlbumGeneratorPAge");
  const dispatch = useDispatch<AppDispatch>();
  const { trackId } = useParams<{ trackId: string }>();
  console.log("Track ID from params:", trackId);
  const resourceType = ResourceType.Track;
  const track = useSelector((state: RootState) => state.track.track);
  const coverData = useSelector((state: RootState) => state.track.coverData);

  useEffect(() => {
    if (track) {
      dispatch(setCoverDataAsync(track.album.images[0].url));
      dispatch(setScannableDataAsync(track.scannables[0].uri));
    }
  }, [track, dispatch]);

  useEffect(() => {
    if (coverData) {
      dispatch(setCoverPaletteAsync(coverData));
    }
  }, [coverData, dispatch]);

  useEffect(() => {
    if (trackId) {
      dispatch(setTrackAsync(trackId));
    }
  }, [trackId, dispatch]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-6 grid gap-6 grid-cols-2">
      <div className="col-span-2 row-start-1 row-end-2 md:col-span-2">
        <GenerateCardWidget resourceType={resourceType} resourceId={trackId} />
      </div>
      <div className="col-span-2 md:col-span-1 col-start-1  flex w-full">
        <TrackCardsFrontPreviewTemplate />
      </div>
      <div className="col-span-2 md:col-span-1 col-start-1  flex w-full">
        <TrackCardBackPreviewTemplate />
      </div>
    </div>
  );
};

export default TrackGeneratorPage;
