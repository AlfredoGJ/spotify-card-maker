import { FrontCover } from "../../organisms/FrontCover/FrontCover";
import { useSelector } from "react-redux";

import { RootState } from "../../../state/store";
import { forwardRef, useRef } from "react";

import {
  SelectBackgroundPreset,
  SelectGradientAngle,
  SelectIsCoverDataLoading,
  SelectIsCoverPalleteLoading,
  SelectIsScannableDataLoading,
  SelectIsTrackLoading,
  SelectScannableData,
} from "../../../state/track/selectors";
import { selectBackgroundPreset } from "../../../utils/gradients/gradients";
import Resizable from "../../../utils/ResizableHOC/Resizable";
import { LoadingSkeleton } from "../../molecules/LoadingSkeleton/LoadingSkeleton";

interface ITrackCardsPreview {}

const TrackCardsFrontPreviewTemplate = forwardRef<HTMLDivElement>(
  ({}: ITrackCardsPreview, ref) => {
    console.log("Component Rendered: TrackCardsPreview");
    const backgroundColors = useSelector(
      (state: RootState) => state.editor.background
    );
    const text = useSelector((state: RootState) => state.editor.text);
    const scannableData = useSelector(SelectScannableData);
    const backgroundPreset = useSelector(SelectBackgroundPreset);
    const background = selectBackgroundPreset(
      backgroundPreset,
      backgroundColors[0].values.hex,
      backgroundColors[1].values.hex,
      // backgroundColors[2].values.hex
      "#ababab"
    );

    const playingTime = useSelector(SelectGradientAngle);

    const track = useSelector((state: RootState) => state.track.track);
    const coverData = useSelector((state: RootState) => state.track.coverData);

    const nodeRef = useRef(null);

    const isTrackLoading = useSelector(SelectIsTrackLoading);
    const isPaletteLoading = useSelector(SelectIsCoverPalleteLoading);
    const isCoverDataLoading = useSelector(SelectIsCoverDataLoading);
    const isScannableDataLoading = useSelector(SelectIsScannableDataLoading);
    const isLoading =
      isTrackLoading ||
      isPaletteLoading ||
      isCoverDataLoading ||
      isScannableDataLoading;

    return (
      <div ref={ref} className="rounded-xl overflow-clip w-full">
        <LoadingSkeleton isLoading={isLoading}>
          <Resizable>
            <FrontCover
              ref={nodeRef}
              playingTime={playingTime}
              coverData={coverData!}
              track={track!}
              backgroundPreset={background}
              textColor={text}
              scannableData={scannableData!}
            />
          </Resizable>
        </LoadingSkeleton>
      </div>
    );
  }
);

export default TrackCardsFrontPreviewTemplate;
