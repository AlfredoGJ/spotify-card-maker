import React, { forwardRef } from "react";
import { AlbumPoster } from "../../organisms/AlbumPoster/AlbumPoster";
import { useSelector } from "react-redux";

import {
  SelectTextColor,
  SelectBackgroundColors,
  SelectVisiblePalette,
  SelectBorderColor,
  SelectScannableColor,
} from "../../../state/AlbumPosterEditor/selectors";
import {
  SelectAlbum,
  SelectCoverData,
  SelectIsAlbumLoading,
  SelectIsCoverDataLoading,
  SelectScannableData,
} from "../../../state/albumPoster/selectors";
import { LoadingSkeleton } from "../../molecules/LoadingSkeleton/LoadingSkeleton";
import Resizable from "../../../utils/ResizableHOC/Resizable";

interface IAlbumposterPreciewTemplate {}

export const AlbumPosterPreviewTemplate = forwardRef<HTMLDivElement>(
  ({}: IAlbumposterPreciewTemplate, ref) => {
    const textColor = useSelector(SelectTextColor);
    const visiblePalette = useSelector(SelectVisiblePalette);
    const BackgroundColor = useSelector(SelectBackgroundColors);
    const frameColor = useSelector(SelectBorderColor);
    const scannableColor = useSelector(SelectScannableColor);
    const album = useSelector(SelectAlbum);
    const coverData = useSelector(SelectCoverData);
    const scannableData = useSelector(SelectScannableData);
    const isAlbumLoading = useSelector(SelectIsAlbumLoading);
    const isCoverDataLoading = useSelector(SelectIsCoverDataLoading);

    const isLoading = isAlbumLoading || isCoverDataLoading;
    return (
      <div ref={ref}>
        <Resizable>
          <AlbumPoster
            backgroundColor={BackgroundColor[0]}
            textColor={textColor[0]}
            paletteData={visiblePalette}
            album={album!}
            coverData={coverData!}
            scannableData={scannableData!}
            frameColor={frameColor[0]}
            scannableColor={scannableColor[0]}
          />
        </Resizable>
      </div>
    );
  }
);
