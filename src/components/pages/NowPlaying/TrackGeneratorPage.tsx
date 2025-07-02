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
import { ResourceType, Track } from "../../../types/types";
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

const TrackGeneratorPage = () => {
  console.log("Rendered Component: AlbumGeneratorPAge");
  const dispatch = useDispatch<AppDispatch>();
  const imageRef = useRef(null);
  const { trackId } = useParams<{ trackId: string }>();
  console.log("Track ID from params:", trackId);
  const resourceType = ResourceType.Track;
  const track = useSelector((state: RootState) => state.track.track);
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
    if (trackId) {
      dispatch(setTrackAsync(trackId)).then((response) => {
        dispatch(
          setScannableDataAsync((response.payload as Track).scannables[0].uri)
        );
        dispatch(
          setCoverDataAsync((response.payload as Track).album.images[0].url)
        ).then((response) => {
          dispatch(setCoverPaletteAsync(response.payload as string));
        });
      });
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
    <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 grid-cols-2">
      <div className="col-span-2 row-start-1 row-end-2 md:col-span-2">
        <GenerateCardWidget
          resourceType={resourceType}
          resourceId={trackId}
          isLoading={isLoading}
        />
      </div>
      <Outlet />
      <div className="col-span-2 md:col-span-1 col-start-1 flex w-full">
        <TrackCardsFrontPreviewTemplate ref={imageRef} />
      </div>
      <div className="col-span-2 md:col-span-1 col-start-1 h-max flex flex-col gap-6 w-full">
        <FrontCoverCustomizePanel />
        <OutputWidget onDownloadClick={handleDownloadClick} />
      </div>
    </div>
  );
};

export default TrackGeneratorPage;
