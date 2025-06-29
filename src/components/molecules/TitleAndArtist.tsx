import React from "react";

import { useElementSize } from "../../utils/hooks/useResize";

interface ITitleAndArtistProps {
  variant?: "nowPlaying" | "AlbumPoster";
  title: { text: string; size: number };
  artist: { text: string; size: number };
}

export const TitleAndArtist = ({
  title,
  artist,
  variant = "nowPlaying",
}: ITitleAndArtistProps) => {
  const { width, height } = useElementSize();

  const order = variant === "AlbumPoster" ? "flex-col-reverse" : "flex-col";
  const casing = variant === "AlbumPoster" ? "uppercase" : "none";
  return (
    <div
      className={` flex ${order}`}
      style={{ marginTop: `${height * 0.02}px`, textTransform: casing }}
    >
      <div
        style={{
          fontSize: `${width * title.size}px`,
          lineHeight: `${width * title.size * 0.9}px`,
        }}
      >
        <b>{title.text}</b>
      </div>
      <div style={{ fontSize: `${width * artist.size}px` }}>{artist.text}</div>
    </div>
  );
};
