import { toPng } from "html-to-image";

export default function downloadImage(
  imgRef: HTMLElement,
  imageName: string
) {
  toPng(imgRef, {
    canvasHeight: 900,
    canvasWidth: 600,
    quality: 1,
  }).then((dataUrl) => {
    var link = document.createElement("a");
    link.download = `${imageName}.png`;
    link.href = dataUrl;
    link.click();
  });
}
