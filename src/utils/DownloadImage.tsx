import { toPng } from "html-to-image";

export default function downloadImage(
  imgRef: HTMLElement,
  imageName: string
) {
  const { width, height } = imgRef.getBoundingClientRect();
  toPng(imgRef, {
    canvasHeight: height,
    canvasWidth: width,
    quality: 1,

  }).then((dataUrl) => {
    var link = document.createElement("a");
    link.download = `${imageName}.png`;
    link.href = dataUrl;
    link.click();
  });
}
