import { Color } from "../types/types";

function createPalette(array: Array<Array<number>>) {
  let result: Array<Color> = [];

  for (let i = 0; i < array.length; i++) {
    result.push({
      name: i.toString(),
      values: { r: array[i][0], g: array[i][1], b: array[i][2] },
    });
  }
  return result;
}

export default createPalette;
