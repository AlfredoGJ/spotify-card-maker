import { Color } from "../types/types";

function generateDefaultPalette(): Array<Color> {
  const palette = [
    {
      name: "white",
      values: { rgb: { r: 255, g: 255, b: 255 }, hex: "#ffffff" },
    },
    { name: "neutral", values: { rgb: { r: 229, g: 229, b: 229 }, hex: "#e5e5e5" } },
    { name: "black", values: { rgb: { r: 0, g: 0, b: 0 }, hex: "#000000" } },
    { name: "red", values: { rgb: { r: 255, g: 0, b: 0 }, hex: "#ff0000" } },
    { name: "green", values: { rgb: { r: 0, g: 255, b: 0 }, hex: "#00ff00" } },
    { name: "blue", values: { rgb: { r: 0, g: 0, b: 255 }, hex: "#0000ff" } },
  ];

  return palette;
}

export default generateDefaultPalette;
