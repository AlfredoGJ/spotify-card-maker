import { Color } from "../types/types";

function generateDefaultPalette(): Array<Color> {
  const palette = [
    { name: "white", values: { r: 255, g: 255, b: 255 } },
    { name: "black", values: { r: 0, g: 0, b: 0 } },
    { name: "red", values: { r: 255, g: 0, b: 0 } },
    { name: "green", values: { r: 0, g: 255, b: 0 } },
    { name: "blue", values: { r: 0, g: 0, b: 255 } },
  ];

  return palette;
}

export default generateDefaultPalette;
