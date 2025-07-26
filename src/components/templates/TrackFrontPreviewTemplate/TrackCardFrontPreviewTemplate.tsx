import { FrontCover } from "../../organisms/FrontCover/FrontCover";
import { useSelector } from "react-redux";

import { RootState } from "../../../state/store";
import { forwardRef } from "react";

import { SelectScannableData } from "../../../state/track/selectors";
import {
  SelectBackgroundPreset,
  SelectGradientAngle,
} from "../../../state/editor/selectors";
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
      backgroundColors[2].values.hex
    );

    const playingTime = useSelector(SelectGradientAngle);

    const track = useSelector((state: RootState) => state.track.track);
    const coverData = useSelector((state: RootState) => state.track.coverData);

    return (
      <Resizable>
        <FrontCover
          ref={ref}
          playingTime={playingTime}
          coverData={coverData!}
          track={track!}
          backgroundPreset={background}
          textColor={text}
          scannableData={scannableData!}
          fallback={LoadingSkeleton}
        />
      </Resizable>
    );
  }
);

export default TrackCardsFrontPreviewTemplate;
