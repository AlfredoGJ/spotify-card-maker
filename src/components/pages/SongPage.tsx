import React, { useCallback, useEffect, useRef, useState } from "react";
import { toJpeg, toPng } from "html-to-image";
import { FrontCover } from "../organisms/FrontCover/FrontCover";
import { BackCover } from "../organisms/BackCover/BackCover";
import { useParams } from "react-router";
import { Color, Track } from "../../types/types";
// @ts-ignore
import ColorThief from "colorthief";
import createPalette from "../../utils/createPalette";
import generateDefaultPalette from "../../utils/generateDefaultPalette";
import { ColorSelector } from "../molecules/ColorSelector";
import { SelectItem } from "../../utils/hooks/useSelect";
import { Button } from "@headlessui/react";

export const SongPage = () => {
  const [track, setTrack] = useState<Track>();
  const [palette, setPalette] = useState<Array<Color>>([]);
  const [backgroundColors, setBackgroundColors] = useState<Color[]>([]);
  const [textColor, setTextColor] = useState<Color>({
    name: "white",
    values: { r: 255, g: 255, b: 255 },
  });
  const [colorsLoading, setColorsLoading] = useState(true);
  const { trackId } = useParams();
  const frontCoverRef = useRef(null);
  const backCoverRef = useRef(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}?trackId=${trackId}`).then(
      (result) => result.json().then((body) => setTrack(body.track))
    );
  }, [trackId]);

  const handleFrontDownload = useCallback(() => {
    console.log("Download Function", frontCoverRef);
    if (frontCoverRef.current) {
      toPng(frontCoverRef.current, {
        canvasHeight: 900,
        canvasWidth: 600,
        quality: 1,
      }).then((dataUrl) => {
        var link = document.createElement("a");
        link.download = `${track?.name}-front.jpeg`;
        link.href = dataUrl;
        link.click();
      });
    }
  }, [track]);

  const handleBackDownload = useCallback(() => {
    if (backCoverRef.current) {
      toPng(backCoverRef.current, {
        canvasHeight: 900,
        canvasWidth: 600,
        quality: 1,
      }).then((dataUrl) => {
        var link = document.createElement("a");
        link.download = `${track?.name}-back.jpeg`;
        link.href = dataUrl;
        link.click();
      });
    }
  }, [track]);

  function handleCoverLoad(cover: HTMLImageElement) {
    console.log("Cover loaded");
    console.log("Palette is empty, creating a new one");
    let colorthief = new ColorThief();
    const palette = createPalette(colorthief.getPalette(cover, 8));
    console.log(palette);
    const defaultPalette = generateDefaultPalette();

    setPalette([...palette, ...defaultPalette]);
    setColorsLoading(false);
  }

  const handleBackgoundColorsChange = useCallback(function (
    selected: SelectItem[]
  ) {
    const colors: Color[] = selected.map((s) => ({
      name: s.index.toString(),
      values: s.value,
    }));
    console.log("New Colors:", colors);

    setBackgroundColors(colors);
  },
  []);

  const handleTextColorChange = useCallback(function (selected: SelectItem[]) {
    const color = selected.map((c) => ({
      name: c.index.toString(),
      values: c.value,
    }));
    setTextColor(color[0]);
  }, []);

  console.log("SongPageRendered");
  return track ? (
    <div>
      <div className="flex gap-6 w-10/12 justify-center justify-self-center mt-6 ">
        <FrontCover
          track={track!}
          onCoverLoad={handleCoverLoad}
          firstBgColor={backgroundColors[0]}
          secondBgColor={backgroundColors[1]}
          textColor={textColor}
          ref={frontCoverRef}
        />
        <BackCover
          imgUri={track.album.images[0].url}
          scannableUri={track.scannables[0].uri}
          ref={backCoverRef}
        />
      </div>
      <div className="flex w-10/12 justify-around justify-self-center py-2 ">
        <Button
          className="w-1/4  bg-green-400 rounded-md p-1 text-white hover:bg-green-500 focus:ring focus:ring-green-300 "
          onClick={handleFrontDownload}
        >
          Download Front
        </Button>
        <Button
          className="w-1/4 bg-green-400 rounded-md p-1 text-white hover:bg-green-500 focus:ring focus:ring-green-300 "
          onClick={handleBackDownload}
        >
          Download Back
        </Button>
      </div>
      {!colorsLoading && (
        <>
          <ColorSelector
            text="Select background colors:"
            colors={palette}
            maxSelect={2}
            onChange={handleBackgoundColorsChange}
          />
          <ColorSelector
            text="Select text color:"
            colors={palette}
            maxSelect={1}
            onChange={handleTextColorChange}
          />
        </>
      )}
    </div>
  ) : (
    <div></div>
  );
};
