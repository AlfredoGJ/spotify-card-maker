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
    const nodeList = parentNode.getElementsByClassName("downloadable");
    let actualElement = null;

    // Convert HTMLCollection to Array to make it iterable
    Array.from(nodeList).forEach((node) => {
      actualElement = node;
    });

    // Or simply get the first element if that's what we need
    if (nodeList.length > 0) {
      actualElement = nodeList[0];
    }

    downloadImage(
      actualElement as HTMLElement,
      `${track?.name}-${track?.artists[0].name}`
    );
  }

  return (
    <Preview title="Front Cover">
      <div className="flex flex-col justify-around gap-5">
        <div>
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
