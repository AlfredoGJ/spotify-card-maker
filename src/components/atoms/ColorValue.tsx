import React from "react";
import { Color } from "../../types/types";

interface IColorPickProps {
  color: Color;
  selected?: boolean;
  isSelectable?: boolean;
  onClick?: () => void;
}

export const ColorName = ({
  color,
  selected = false,
  isSelectable = false,
  onClick,
}: IColorPickProps) => {
  function handleClick() {
    console.log("Color clicked");
    onClick && onClick();
  }
  return (
    <div
      onClick={() => handleClick()}
      className={`w-6 h-6 rounded-lg ring-1  ${
        isSelectable ? "cursor-pointer " : "  "
      } ${
        selected ? "ring-2 ring-green-400" : " ring-gray-600 "
      } hover:scale-105 hover:ring-green-600  `}
      style={{
        background: `rgb(${color.values.r},${color.values.g}, ${color.values.b})`,
      }}
    ></div>
  );
};
