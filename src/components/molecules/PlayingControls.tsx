import React from "react";
import { ReactComponent as NextIcon } from "../../assets/next.svg";
import { ReactComponent as PauseIcon } from "../../assets/pause.svg";
import { useResize } from "../../utils/hooks/useResize";

export const PlayingControls = () => {
  const { width } = useResize();
  return (
    <div
      className="flex justify-between items-center"
      style={{ paddingInline: `${width * 0.25}px` }}
    >
      <NextIcon
        transform="rotate(180)"
        fill="white"
        width={`${width * 0.09}px`}
        height={`${width * 0.09}px`}
      />
      <PauseIcon
        fill="white"
        width={`${width * 0.12}px`}
        height={`${width * 0.12}px`}
      />
      <NextIcon
        fill="white"
        width={`${width * 0.09}px`}
        height={`${width * 0.12}px`}
      />
    </div>
  );
};
