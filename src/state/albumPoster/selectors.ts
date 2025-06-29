import { RootState } from "../store";

export const SelectAlbum = (state: RootState) => state.album.album;
export const SelectCoverData = (state: RootState) => state.album.coverData;
export const SelectScannableData = (state: RootState) =>
  state.album.scannableData;
export const SelectCoverPallete = (state: RootState) =>
  state.album.coverPallete;
export const SelectIsAlbumLoading = (state: RootState) =>
  state.album.isLoading.album;
export const SelectIsCoverDataLoading = (state: RootState) =>
  state.album.isLoading.coverData;
export const SelectIsScannableDataLoading = (state: RootState) =>
  state.album.isLoading.scannableData;
export const SelectIsCoverPalleteLoading = (state: RootState) =>
  state.album.isLoading.coverPallete;

