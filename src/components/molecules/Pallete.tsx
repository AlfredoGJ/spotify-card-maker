import React from "react";
import { Color } from "../../types/types";
import { ColorValue } from "../atoms/ColorValue/ColorValue";
import { useElementSize } from "../../utils/hooks/useResize";

interface IPaletteProps {
  colors: Color[];
  colorWidth: number
}

export const Palette = ({ colors, colorWidth }: IPaletteProps) => {
  const {width, height} = useElementSize()
  return (
    <div className="flex flex-row justify-between  gap-[5%] ">
      {colors.map((color) => (
        <ColorValue key={color.name} color={color} width={colorWidth*width} />
      ))}
    </div>
  );
};
