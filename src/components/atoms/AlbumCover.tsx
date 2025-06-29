import React, { HtmlHTMLAttributes } from "react";

interface IAlbumCoverProps extends HtmlHTMLAttributes<HTMLImageElement> {
  src: string;
  relativeSize?: "full" | "";
}

export const AlbumCover = ({
  src,
  relativeSize = "full",
}: IAlbumCoverProps) => {
  return (
    <div className="flex justify-center">
      <img
        className={`cover`}
        // style={{ width: "90%" }}
        crossOrigin="anonymous"
        alt="song-album-cover"
        src={src}
      />
    </div>
  );
};
