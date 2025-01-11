import React from "react";
import { ReactComponent as HearthIcon } from "../../assets/heart.svg";
import { useResize } from "../../utils/hooks/useResize";

interface ITitleAndArtistProps {
  title: { text: string; size: number };
  artist: { text: string; size: number };
}

export const TitleAndArtist = ({ title, artist }: ITitleAndArtistProps) => {
  const { width, height } = useResize();
  console.log("This is the Width:", width);
  return (
    <div className="flex flex-col" style={{ marginTop: `${height * 0.011}px` }}>
      <div>
        <div style={{ fontSize: `${width * title.size}px` }}>
          <b>{title.text}</b>
        </div>
        <div style={{ fontSize: `${width * artist.size}px` }}>
          {artist.text}
        </div>
      </div>
      <div
        className=" flex justify-end"
        style={{ paddingBottom: `${height * 0.01}px` }}
      >
        <HearthIcon
          fill="currentColor"
          width={height * 0.045}
          height={height * 0.045}
        />
      </div>
    </div>
  );
};
