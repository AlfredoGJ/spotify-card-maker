import React, { useState } from "react";
import { Color } from "../../../types/types";
import ColorValueClasses from "./Classes";

interface IColorPickProps {
  color: Color;
  selected?: boolean;
  isSelectable?: boolean;
  onClick?: () => void;
  shape?: "square" | "rounded" | "circle" | "roundedRight" | "roundedLeft";
  width?: number;
  className?:string
}

export const ColorValue = ({
  color,
  selected = false,
  isSelectable = false,
  onClick,
  shape = "square",
  width = 24,
  className
}: IColorPickProps) => {
  const [hovered, setHovered] = useState(false);
  const arrayClasses = [
    ColorValueClasses.shape[shape],
    isSelectable && ColorValueClasses.selectable,
    selected && ColorValueClasses.selected,
    hovered && isSelectable && ColorValueClasses.hover,
    className
  ];

  const classes = arrayClasses.join(" ");
  function handleClick() {
    onClick && onClick();
  }

  return (
    <div
      onClick={() => handleClick()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={classes}
      style={{
        background: color.values.hex,
        width: `${width}px`,
      }}
    ></div>
  );
};
