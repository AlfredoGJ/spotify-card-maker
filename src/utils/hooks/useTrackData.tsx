import { useEffect, useState } from "react";
import { Color, Track } from "../../types/types";
import { getImage, getScannable, getTrack } from "../api/getResource";
import generatePaletteFromImage from "../generatePaletteFromImage";

export default function useTrackData(
  trackId: string
): [Track| undefined, string, string, Color[]] {
  const [trackData, setTrackData] = useState<Track>();
  const [scannableData, setScannableData] = useState("");
  const [coverData, setCoverData] = useState("");
  const [colorPalette, setColorPalette] = useState<Color[]>([]);

  function getAllData() {
    getTrack(trackId)
      .then((track: Track) => {
        setTrackData(track);
        return track;
      })
      .then((track: Track) => {
        getScannable(track.scannables[0].uri).then((scannable) =>
          setScannableData(scannable)
        );
        getImage(track.album.images[0].url)
          .then((image) => {
            setCoverData(image);
            return image;
          })
          .then((image) => generatePaletteFromImage(image, 8))
          .then((palette: Color[]) => setColorPalette(palette));
      });
  }

  useEffect(getAllData, [trackId]);

  return [trackData, scannableData, coverData, colorPalette];
}
