import React from "react";
import { Color } from "../../types/types";

interface IColorPickProps {
  color: Color;
  selected: boolean;
}

export const ColorPick = ({ color, selected }: IColorPickProps) => {
  return (
    <div
      className={`w-6 h-6 rounded-md  hover:ring-2 hover: ring-slate-400 ${
        selected ? "ring-green-400" : ""
      } `}
      style={{ background: `rgb(${color.r},${color.g}, ${color.b})` }}
    ></div>
  );
};
