import React from "react";
import { ReactComponent as NextIcon } from "../../assets/next.svg";
import { ReactComponent as PauseIcon } from "../../assets/pause.svg";
import { useResize } from "../../utils/hooks/useResize";

export const PlayingControls = () => {
  const { width } = useResize();
  return (
    <div
      className="flex justify-between items-center w-3/4 justify-self-center"
      style={{ paddingInline: `${width * 0.09}px` }}
    >
      <NextIcon
        transform="rotate(180)"
        fill="currentColor"
        width={`${width * 0.085}px`}
        height={`${width * 0.085}px`}
      />
      <PauseIcon
        fill="currentColor"
        width={`${width * 0.13}px`}
        height={`${width * 0.13}px`}
      />
      <NextIcon
        fill="currentColor"
        width={`${width * 0.085}px`}
        height={`${width * 0.085}px`}
      />
    </div>
  );
};
