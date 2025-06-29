import React from "react";
import { ReactComponent as HearthIcon } from "../../../assets/heart.svg";
import { useElementSize } from "../../../utils/hooks/useResize";
export const FavIcon = () => {
  const { height } = useElementSize();
  return (
    <div
      className="flex justify-end"
      // style={{ paddingBottom: `${height * 0.01}px` }}
    >
      <HearthIcon
        style={{marginTop:`-${height*.015}px`}}
        fill="currentColor"
        width={height * 0.035}
        height={height * 0.042}
      />
    </div>
  );
};
