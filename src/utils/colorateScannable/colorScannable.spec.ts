import colorScannable from "./colorScannable";
import {
  backgroundChangedSVG,
  foregroundChangedSVG,
  initialSVG,
} from "./testCases";

describe("ColorScannable", () => {
  it("Changes the background color", () => {
    const result = colorScannable(initialSVG, "#aabbcc", "background");
    expect(result).toEqual(backgroundChangedSVG);
  });

  it("Changes the foreground color", () => {
    const result = colorScannable(initialSVG, "#aabbcc", "foreground");
    expect(result).toEqual(foregroundChangedSVG);
  });
});
