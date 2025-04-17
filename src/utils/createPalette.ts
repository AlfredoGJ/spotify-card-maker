import { Color } from "../types/types";
import rgbToHex from "./rgbToHex/rgbToHex";

function createPalette(array: Array<Array<number>>) {
  let result: Array<Color> = [];

  for (let i = 0; i < array.length; i++) {
    let rgb = { r: array[i][0], g: array[i][1], b: array[i][2] };
    result.push({
      name: i.toString(),
      values: { rgb, hex: rgbToHex(rgb) },
    });
  }
  return result;
}

export default createPalette;
