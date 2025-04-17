import React, { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { FrontCover } from "../organisms/FrontCover/FrontCover";
import { BackCover } from "../organisms/BackCover/BackCover";
import { useParams } from "react-router";
import { Color, Track } from "../../types/types";
import { ColorSelector } from "../molecules/ColorSelector";
import { SelectItem } from "../../utils/hooks/useSelect";
import { Button } from "../atoms/Button/Button";
import colorScannable from "../../utils/colorateScannable/colorScannable";
import { getImage, getScannable, getTrack } from "../../utils/api/getResource";
import generatePaletteFromImage from "../../utils/generatePaletteFromImage";
import { LoadingSkeleton } from "../molecules/LoadingSkeleton/LoadingSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import {
  changeBackground,
  changeTextColor,
} from "../../state/editor/trackEditorSlice";
import {
  setCoverData,
  setCoverPallete,
  setScannableData,
  setTrack,
} from "../../state/track/trackSlice";
import useTrackData from "../../utils/hooks/useTrackData";

export const SongPage = () => {
  const { background, text, scannableBackground, scannableText } = useSelector(
    (state: RootState) => state.editor
  );
  const { track, coverPallete, coverData, scannableData } = useSelector(
    (state: RootState) => state.track
  );
  const dispatch = useDispatch();
  const { trackId } = useParams();
  
  const isLoading = !Boolean(coverData);
  const frontCoverRef = useRef(null);
  const backCoverRef = useRef(null);

/*   useEffect(() => {
    let imgPalette: Array<Color> = [];
    let svg = "";
    let imageUrl = "";
    let trackData: Track | null = null;

    getTrack(trackId!)
      .then((track) => {
        trackData = track;
        return getImage(track.album.images[0].url);
      })
      .then((image) => {
        imageUrl = image;
        return generatePaletteFromImage(image, 8);
      })
      .then((palette) => {
        imgPalette = palette;
        return trackData;
      })
      .then((track) => getScannable(track!.scannables[0].uri))
      .then(
        (scannableText: string) =>
          (svg = colorScannable(
            scannableText,
            imgPalette[0].values.hex,
            imgPalette[1].values.hex
          ))
      )
      .finally(() => {
        dispatch(setCoverPallete(imgPalette));
        dispatch(setScannableData(svg));
        dispatch(setTrack(trackData));
        dispatch(setCoverData(imageUrl));
      });
  }, [trackId, dispatch]); */

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
  }, [track?.name]);

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
  }, [track?.name]);

  function handleBackgoundColorsChange(selected: SelectItem[]) {
    console.log("Background Colors Changed");
    const colors: Color[] = selected.map((s) => ({
      name: s.id.toString(),
      values: s.value,
    }));

    if (colors.length > 0) {
      dispatch(changeBackground(colors));
    }
  }

  function handleTextColorChange(selected: SelectItem[]) {
    console.log("Text Color Changed");
    const color = selected.map((c) => ({
      name: c.id.toString(),
      values: c.value,
    }));
    if (color.length > 0) {
      dispatch(changeTextColor(color[0]));
    }
  }

  const handleScannableColorChange = useCallback(
    function (selected: SelectItem[]) {
      const color = selected.map((c) => ({
        name: c.id.toString(),
        values: c.value,
      }));
      if (color.length > 0) {
        let svg = colorScannable(
          scannableData!,
          undefined,
          color[0].values.hex
        );
        dispatch(setScannableData(svg));
      }
    },
    [dispatch, scannableData]
  );
  const handleScannableBackgroundColorChange = useCallback(
    function (selected: SelectItem[]) {
      const color = selected.map((c) => ({
        name: c.id.toString(),
        values: c.value,
      }));
      if (color.length > 0) {
        let svg = colorScannable(scannableData!, color[0].values.hex);
        dispatch(setScannableData(svg));
      }
    },
    [dispatch, scannableData]
  );

  console.log("SongPageRendered");
  return (
    <div>
      {/* <div className="flex gap-6 w-10/12 h-[60vh] justify-center justify-self-center mt-6 ">
        <LoadingSkeleton isLoading={isLoading}>
          <FrontCover
            coverData={coverData!}
            track={track!}
            firstBgColor={background[0]}
            secondBgColor={background[1]}
            textColor={text}
            ref={frontCoverRef}
          />
        </LoadingSkeleton>
        <LoadingSkeleton isLoading={isLoading}>
          <BackCover
            scannableBackground={scannableBackground}
            scannableText={scannableText}
            coverData={coverData!}
            scannableData={scannableData!}
            ref={backCoverRef}
          />
        </LoadingSkeleton>
      </div>
      <div className="flex w-10/12 justify-around justify-self-center py-2 ">
        <Button onClick={handleFrontDownload}>Download Front</Button>
        <Button onClick={handleBackDownload}>Download Back</Button>
      </div>

      <div className="flex flex-row justify-center gap-2 h-[20vh]">
        <LoadingSkeleton isLoading={isLoading}>
          <ColorSelector
            defaultSelectedNames={["0", "1"]}
            text="Background colors"
            colors={coverPallete}
            maxSelect={2}
            onChange={handleBackgoundColorsChange}
          />
        </LoadingSkeleton>
        <LoadingSkeleton isLoading={isLoading}>
          <ColorSelector
            defaultSelectedNames={["0"]}
            text="Text color"
            colors={coverPallete}
            maxSelect={1}
            onChange={handleTextColorChange}
          />
        </LoadingSkeleton>
        <LoadingSkeleton isLoading={isLoading}>
          <ColorSelector
            defaultSelectedNames={["1"]}
            text="Code Background Color"
            colors={coverPallete}
            maxSelect={1}
            onChange={handleScannableBackgroundColorChange}
          />
        </LoadingSkeleton>
        <LoadingSkeleton isLoading={isLoading}>
          <ColorSelector
            defaultSelectedNames={["0"]}
            text="Code Color"
            colors={coverPallete}
            maxSelect={1}
            onChange={handleScannableColorChange}
          />
        </LoadingSkeleton>
      </div> */}
    </div>
  );
};
