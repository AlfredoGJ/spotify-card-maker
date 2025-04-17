import React, { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";
import { useParams } from "react-router";
import { Color, Album } from "../../types/types";
import { AlbumPoster } from "../organisms/AlbumPoster/AlbumPoster";
import { ElementSizeContextProvider } from "../../utils/hooks/useResize";
import { ColorSelector } from "../molecules/ColorSelector";
import { SelectItem } from "../../utils/hooks/useSelect";
import { Button } from "../atoms/Button/Button";
import colorScannable from "../../utils/colorateScannable/colorScannable";
import { getImage, getScannable, getAlbum } from "../../utils/api/getResource";
import generatePaletteFromImage from "../../utils/generatePaletteFromImage";
import { LoadingSkeleton } from "../molecules/LoadingSkeleton/LoadingSkeleton";
import { EditorLayout } from "../atoms/EditorLayout/EditorLayout";
import { ButtonGroup } from "../molecules/ButtonGroup/ButtonGroup";

interface IColors {
  text: Color;
  background: Color;
}

export const AlbumPage = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState<Album>();
  const [coverPalette, setCoverPalette] = useState<Array<Color>>([]);
  const [svgData, setSvgData] = useState("");
  const [cover, setCover] = useState("");
  const [loading, setLoading] = useState(true);

  const [posterColors, setPosterColors] = useState<IColors>();

  const defaultBackgroundColorName = "neutral";
  const defaultTextColorName = "black";

  useEffect(() => {
    let imgPalette: Array<Color> = [];
    let svg = "";
    let imageUrl = "";
    let albumData: Album | null = null;

    getAlbum(albumId!)
      .then((album) => {
        albumData = album;
        return getImage(album.images[0].url);
      })
      .then((image) => {
        imageUrl = image;
        return generatePaletteFromImage(image, 8);
      })
      .then((palette) => {
        imgPalette = palette;
        return albumData;
      })
      .then((album) => getScannable(album!.scannables[0].uri))
      .then(
        (scannableText: string) =>
          (svg = colorScannable(
            scannableText,
            imgPalette[0].values.hex,
            imgPalette[1].values.hex
          ))
      )
      .finally(() => {
        setCoverPalette(imgPalette);
        setSvgData(svg);
        setAlbum(albumData!);
        setCover(imageUrl);
        setLoading(false);
        setPosterColors({
          background: imgPalette.find(
            (c) => c.name === defaultBackgroundColorName
          )!,
          text: imgPalette.find((c) => c.name === defaultTextColorName)!,
        });
      });
  }, [albumId]);

  const handleBackgroundColorChange = useCallback(
    (selected: SelectItem[]) => {
      const color = selected.map((c) => ({
        name: c.id.toString(),
        values: c.value,
      }));

      console.log("COLORBG", color);
      console.log("Selected", selected);
      if (color.length > 0)
        setPosterColors({ ...posterColors!, background: color[0] });
    },
    [posterColors]
  );

  const handleTextColorChange = useCallback(
    (selected: SelectItem[]) => {
      const color = selected.map((c) => ({
        name: c.id.toString(),
        values: c.value,
      }));
      if (color.length > 0)
        setPosterColors({ ...posterColors!, text: color[0] });
    },
    [posterColors]
  );

  const handleScannableBackgroundChange = (selected: SelectItem[]) => {
    const color = selected.map((c) => ({
      name: c.id.toString(),
      values: c.value,
    }));

    setSvgData(colorScannable(svgData, color[0].values.hex));
  };
  const handleScannableTextChange = (selected: SelectItem[]) => {
    const color = selected.map((c) => ({
      name: c.id.toString(),
      values: c.value,
    }));

    setSvgData(colorScannable(svgData, undefined, color[0].values.hex));
  };

  const handlePosterDownload =() =>{
   let poster = document.getElementById('album-poster')
  toPng(poster!, {canvasHeight:1800,canvasWidth:1200, quality:1}).then((dataurl) =>{
    let link = document.createElement('a')
    link.download = `${album?.name}-poster.png`
    link.href = dataurl
    link.click()
  })
  }

  const handleFormatChange = (name:string)=>{
    console.log("changed to")
  }

   

  return (
    <EditorLayout>
     {/*  <div className="editor-area-top  bg-black"></div>
      <div className="flex flex-col w-[85%]  editor-area-main p-9 ">
        <LoadingSkeleton isLoading={loading}>
          <ElementSizeContextProvider>
            <AlbumPoster
              backgroundColor={posterColors?.background!}
              textColor={posterColors?.text!}
              paletteData={coverPalette.slice(0, 5)}
              albumData={album!}
              coverData={cover}
              scannableData={svgData}
            ></AlbumPoster>
          </ElementSizeContextProvider>
        </LoadingSkeleton>
        <div className="flex p-2 justify-center">
          <Button onClick={handlePosterDownload}>Download Poster</Button>
          <ButtonGroup defaultSelectedName="one">
            <Button name="one"> one</Button>
            <Button name="two"> two</Button>
            <Button name ="three"> three</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="flex flex-col editor-area-right">
        <LoadingSkeleton isLoading={loading}>
          <ColorSelector
            defaultSelectedNames={["neutral"]}
            colors={coverPalette}
            maxSelect={1}
            text="Background Color"
            onChange={handleBackgroundColorChange}
          ></ColorSelector>
        </LoadingSkeleton>
        <LoadingSkeleton isLoading={loading}>
          <ColorSelector
            defaultSelectedNames={["black"]}
            colors={coverPalette}
            maxSelect={1}
            text="Text Color"
            onChange={handleTextColorChange}
          ></ColorSelector>
        </LoadingSkeleton>
        <LoadingSkeleton isLoading={loading}>
          <ColorSelector
            defaultSelectedNames={["1"]}
            colors={coverPalette}
            maxSelect={1}
            text="Code Background"
            onChange={handleScannableBackgroundChange}
          ></ColorSelector>
        </LoadingSkeleton>
        <LoadingSkeleton isLoading={loading}>
          <ColorSelector
            defaultSelectedNames={["0"]}
            colors={coverPalette}
            maxSelect={1}
            text="Code Foreground"
            onChange={handleScannableTextChange}
          ></ColorSelector>
        </LoadingSkeleton>
      </div> */}
    </EditorLayout>
  );
};
