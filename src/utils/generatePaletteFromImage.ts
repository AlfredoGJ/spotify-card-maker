import createPalette from "./createPalette";
import generateDefaultPalette from "./generateDefaultPalette";
// @ts-ignore
import ColorThief from "colorthief";
import { Color } from "../types/types";

const generatePaletteFromImage = (imageUrl: string, colors:number): Promise<Array<Color>> => {
  return new Promise((resolve, reject) => {
    const imageElement = document.createElement("img");
    let colorthief = new ColorThief();
    imageElement.onload = () => {
      const imagePalette = createPalette(
        colorthief.getPalette(imageElement, colors)
      );
      
      resolve(imagePalette);
    };
    imageElement.width = 640;
    imageElement.height = 640;
    imageElement.src = imageUrl;
  });
};

export default generatePaletteFromImage;
