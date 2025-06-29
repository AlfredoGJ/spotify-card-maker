import { FrontCover } from "../../organisms/FrontCover/FrontCover";
import { useSelector } from "react-redux";

import { RootState } from "../../../state/store";
import { forwardRef, useRef } from "react";

import {
  SelectBackgroundPreset,
  SelectGradientAngle,
  SelectScannableData,
} from "../../../state/track/selectors";
import { selectBackgroundPreset } from "../../../utils/gradients/gradients";

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

    return (
      <div ref={ref} className="rounded-xl overflow-clip w-full">
        <FrontCover
          ref={nodeRef}
          playingTime={playingTime}
          coverData={coverData!}
          track={track!}
          backgroundPreset={background}
          textColor={text}
          scannableData={scannableData!}
        />
      </div>
    );
  }
);

export default TrackCardsFrontPreviewTemplate;
