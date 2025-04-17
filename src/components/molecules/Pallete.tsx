import React from "react";
import { Color } from "../../types/types";
import { ColorValue } from "../atoms/ColorValue/ColorValue";

interface IPaletteProps {
  colors: Color[];
  colorWidth: number
}

export const Palette = ({ colors, colorWidth }: IPaletteProps) => {
  return (
    <div className="flex flex-row justify-between  gap-[5%] ">
      {colors.map((color) => (
        <ColorValue key={color.name} color={color} width={colorWidth} />
      ))}
    </div>
  );
};
