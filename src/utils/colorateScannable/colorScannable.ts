const backgroundRegex =
  /(<rect x="0" y="0".*fill=")(#[0123456789abcdef]{6})(".*\/>)/;
const barsRegex = /(\/>\n.*<rect.*fill=")(#[0123456789abcdef]{6})(")/g;
const logoRegex = /(<.*path.*fill=")(#[0123456789abcdef]{6})(")/;

function colorScannable(svgText: string, bgColor?: string, fgColor?: string) {
  let newSVG = svgText

  if(bgColor){
    newSVG = newSVG.replace(backgroundRegex, `$1${bgColor}$3`);
  }
  if (fgColor) {
    newSVG = newSVG.replaceAll(barsRegex, `$1${fgColor}$3`);
    newSVG = newSVG.replace(logoRegex, `$1${fgColor}$3`);
  }
  return newSVG;
}

export default colorScannable;
