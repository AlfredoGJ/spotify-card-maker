import React, { useEffect, useState } from "react";
import { FrontCover } from "../organisms/FrontCover/FrontCover";
import { BackCover } from "../organisms/BackCover/BackCover";
import { useParams } from "react-router";
import { Color, Track } from "../../types/types";
// @ts-ignore
import ColorThief from "colorthief";
import createPalette from "../../utils/createPalette";
import { ColorPick } from "../atoms/ColorPick";
import { ElementSizeContextProvider } from "../../utils/hooks/useResize";

export const SongPage = () => {
  const [track, setTrack] = useState<Track>();
  const [palette, setPalette] = useState<Array<Color>>([]);
  const { trackId } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}?trackId=${trackId}`).then(
      (result) => result.json().then((body) => setTrack(body.track))
    );
  }, [trackId]);

  function handleCoverLoad(cover: HTMLImageElement) {
    let colorthief = new ColorThief();
    const palette = createPalette(colorthief.getPalette(cover, 8));
    console.log(palette);
    setPalette(palette);
  }
  return track ? (
    <div>
      <div className="flex gap-6 w-10/12 justify-center justify-self-center my-10 ">
        <FrontCover
          track={track!}
          onCoverLoad={handleCoverLoad}
          firstBgColor={palette[0]}
          secondBgColor={palette[1]}
        />
        <BackCover track={track!} />
      </div>
      <div className="flex gap-4 w-4/4 justify-center">
        {palette.map((color) => (
          <ColorPick color={color} selected={false} />
        ))}
      </div>
    </div>
  ) : (
    <div></div>
  );
};
