import React from "react";

interface IAlbumCoverProps {
  src: string;
}

export const AlbumCover = ({ src }: IAlbumCoverProps) => {
  return (
    <img
      style={{width:'100%'}}
      crossOrigin="anonymous"
      alt="cover"
      className="cover"
      src={src}
    ></img>
  );
};
