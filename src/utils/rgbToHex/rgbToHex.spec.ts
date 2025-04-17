import { Color } from "../../types/types";
import rgbToHex from "./rgbToHex";

describe("Utils: rgnToHex:", () => {
  it("Should parse a 'black' color correctly", () => {
    let black: Color = { name: "black", values: { rgb: { r: 0, g: 0, b: 0 }, hex: "#000000" } };

    let result = rgbToHex(black.values.rgb);

    expect(result).toEqual("#000000");
  });

  it("Should parse a 'white' color correctly", () => {
    let white: Color = { name: "white", values: { rgb: { r: 255, g: 255, b: 255 }, hex: "#ffffff" } };

    let result = rgbToHex(white.values.rgb);

    expect(result).toEqual("#ffffff");
  });

  it("Should parse a 'red' color correctly", () => {
    let red: Color = { name: "red", values: { rgb: { r: 255, g: 0, b: 0 }, hex: "#ff0000" } };

    let result = rgbToHex(red.values.rgb);

    expect(result).toEqual("#ff0000");
  });

  it("Should parse a 'complex' color correctly", () => {
    let brown: Color = { name: "brown", values: { rgb: { r: 191, g: 187, b: 169 }, hex: "#bfbba9" } };

    let result = rgbToHex(brown.values.rgb);

    expect(result).toEqual("#bfbba9");
  });
});
