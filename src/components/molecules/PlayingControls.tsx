import React from "react";
import { ReactComponent as NextIcon } from "../../assets/next.svg";
import { ReactComponent as PauseIcon } from "../../assets/pause.svg";
import { useElementSize } from "../../utils/hooks/useResize";

export const PlayingControls = () => {
  const { width } = useElementSize();
  return (
    <div
      className="flex justify-between items-center"
      style={{ paddingInline: `${width * 0.212}px`, marginTop:`-${width* 0.026}px` }}
    >
      <NextIcon
        transform="rotate(180)"
        fill="currentColor"
        width={`${width * 0.065}px`}
        height={`${width * 0.065}px`}
      />
      <PauseIcon
        fill="currentColor"
        width={`${width * 0.10}px`}
        height={`${width * 0.10}px`}
      />
      <NextIcon
        fill="currentColor"
        width={`${width * 0.065}px`}
        height={`${width * 0.065}px`}
      />
    </div>
  );
};
