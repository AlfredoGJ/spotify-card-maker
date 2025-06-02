import { OutputWidget, Preview } from "../../organisms";
import { FrontCover } from "../../organisms/FrontCover/FrontCover";
import { useSelector } from "react-redux";

import { RootState } from "../../../state/store";
import { FrontCoverCustomizePanel } from "../../organisms/FrontCoverCustomizePanel/FrontCoverCustomizePanel";
import { useRef } from "react";

import downloadImage from "../../../utils/DownloadImage";

interface ITrackCardsPreview {}

const TrackCardsFrontPreviewTemplate = ({}: ITrackCardsPreview) => {
  console.log("Component Rendered: TrackCardsPreview");
  const background = useSelector((state: RootState) => state.editor.background);
  const text = useSelector((state: RootState) => state.editor.text);

  const gradientAngle = useSelector(
    (state: RootState) => state.editor.gradientAngle
  );

  const track = useSelector((state: RootState) => state.track.track);
  const coverData = useSelector((state: RootState) => state.track.coverData);

  const nodeRef = useRef(null);

  function handleDownloadClick() {
    const parentNode = nodeRef.current! as HTMLDivElement;
    
    downloadImage(
      parentNode as HTMLElement,
      `${track?.name}-${track?.artists[0].name}`
    );
  }

  return (
    <Preview title="Front Cover">
      <div className="flex flex-col justify-between gap-7 h-full ">
        <div className="flex flex-col gap-5">
          <div className="rounded-lg overflow-clip">
            <FrontCover
              ref={nodeRef}
              gradientAngle={gradientAngle}
              coverData={coverData!}
              track={track!}
              firstBgColor={background[0]}
              secondBgColor={background[1]}
              textColor={text}
            />
          </div>
          <FrontCoverCustomizePanel />
        </div>
        <div className="">
          <OutputWidget onDownloadClick={handleDownloadClick} />
        </div>
      </div>
    </Preview>
  );
};

export default TrackCardsFrontPreviewTemplate;
