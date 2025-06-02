import { OutputWidget, Preview } from "../../organisms";
import { BackCover } from "../../organisms/BackCover/BackCover";
import { RootState } from "../../../state/store";
import { useSelector } from "react-redux";
import { BackCoverCustomizePanel } from "../../organisms/BackCoverCustomizePanel/BackCoverCustomizePanel";
import downloadImage from "../../../utils/DownloadImage";
import { useRef } from "react";
import { SelectTrack } from "../../../state/track/selectors";

interface ITrackCardsPreview {}

const TrackCardBackPreviewTemplate = ({}: ITrackCardsPreview) => {
  console.log("Component Rendered: TrackCardsPreview");
  const scannableBackground = useSelector(
    (state: RootState) => state.editor.scannableBackground
  );
  const scannableText = useSelector(
    (state: RootState) => state.editor.scannableText
  );

  const coverData = useSelector((state: RootState) => state.track.coverData);
  const scannableData = useSelector(
    (state: RootState) => state.track.scannableData
  );

  const nodeRef = useRef(null);

  const track = useSelector(SelectTrack);

  function handleDownloadClick() {
    const parentNode = nodeRef.current! as HTMLDivElement;

    downloadImage(
      parentNode as HTMLElement,
      `${track?.name}-${track?.artists[0].name}`
    );
  }

  return (
    <Preview title="Back Cover">
      <div className="flex flex-col justify-between gap-5 h-full ">
        <div className="flex flex-col gap-5">
          <div className="rounded-lg overflow-clip ">
            <BackCover
              ref={nodeRef}
              coverData={coverData!}
              scannableData={scannableData!}
              scannableBackground={scannableBackground!}
              scannableText={scannableText}
            />
          </div>
          <BackCoverCustomizePanel />
        </div>
        <div className="">
          <OutputWidget onDownloadClick={handleDownloadClick} />
        </div>
      </div>
    </Preview>
  );
};

export default TrackCardBackPreviewTemplate;
