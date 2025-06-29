import { AppDispatch, RootState } from "../../../state/store";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  setCoverDataAsync,
  setScannableDataAsync,
  setCoverPaletteAsync,
  setTrackAsync,
} from "../../../state/track/trackSlice";

import { Outlet, useParams } from "react-router";
import GenerateCardWidget from "../../organisms/GenerateCardWidget";
import TrackCardsFrontPreviewTemplate from "../../templates/TrackFrontPreviewTemplate/TrackCardFrontPreviewTemplate";
import { ResourceType } from "../../../types/types";
import {
  SelectIsCoverDataLoading,
  SelectIsCoverPalleteLoading,
  SelectIsScannableDataLoading,
  SelectIsTrackLoading,
} from "../../../state/track/selectors";
import { FrontCoverCustomizePanel } from "../../organisms/FrontCoverCustomizePanel/FrontCoverCustomizePanel";
import { OutputWidget } from "../../organisms";
import downloadImage from "../../../utils/DownloadImage";
import "./now-playing.css";
import { LoadingSkeleton } from "../../molecules/LoadingSkeleton/LoadingSkeleton";

const TrackGeneratorPage = () => {
  console.log("Rendered Component: AlbumGeneratorPAge");
  const dispatch = useDispatch<AppDispatch>();
  const imageRef = useRef(null);
  const { trackId } = useParams<{ trackId: string }>();
  console.log("Track ID from params:", trackId);
  const resourceType = ResourceType.Track;
  const track = useSelector((state: RootState) => state.track.track);
  const coverData = useSelector((state: RootState) => state.track.coverData);
  const isTrackLoading = useSelector(SelectIsTrackLoading);
  const isCoverDataLoading = useSelector(SelectIsCoverDataLoading);
  const isPaletteLoading = useSelector(SelectIsCoverPalleteLoading);
  const isScannableDataLoading = useSelector(SelectIsScannableDataLoading);

  const isLoading =
    isTrackLoading ||
    isCoverDataLoading ||
    isPaletteLoading ||
    isScannableDataLoading;

  useEffect(() => {
    if (!isTrackLoading) {
      dispatch(setCoverDataAsync(track!.album.images[0].url));
      dispatch(setScannableDataAsync(track!.scannables[0].uri));
    }
  }, [isTrackLoading, dispatch, track]);

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

  const handleDownloadClick = () => {
    const parentNode = imageRef.current! as HTMLDivElement;

    downloadImage(
      parentNode as HTMLElement,
      `${track?.name}-${track?.artists[0].name}`
    );
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-6 grid gap-6 grid-cols-2">
      <div className="col-span-2 row-start-1 row-end-2 md:col-span-2">
        <GenerateCardWidget
          resourceType={resourceType}
          resourceId={trackId}
          isLoading={isLoading}
        />
      </div>
      <Outlet />
      <div className="col-span-2 md:col-span-1 col-start-1 flex w-full">
        <LoadingSkeleton isLoading={isLoading}>

        <TrackCardsFrontPreviewTemplate ref={imageRef} />
        </LoadingSkeleton>
      </div>
      <div className="col-span-2 md:col-span-1 col-start-1 h-max flex flex-col gap-6 w-full">
        <FrontCoverCustomizePanel />
        <OutputWidget onDownloadClick={handleDownloadClick} />
      </div>
    </div>
  );
};

export default TrackGeneratorPage;
