import React from "react";

interface IAlbumCoverProps {
  onCoverLoad: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  src: string;
}

export const AlbumCover = ({ src, onCoverLoad }: IAlbumCoverProps) => {
  return (
    <img
      style={{width:'100%'}}
      crossOrigin="anonymous"
      onLoad={onCoverLoad}
      alt="cover"
      className="cover"
      src={src}
    ></img>
  );
};
