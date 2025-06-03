import { RootState } from "../store";

export const SelectCoverPallete = (state: RootState) =>
  state.track.coverPallete;

export const SelectTrack = (state: RootState) => state.track.track;

export const SelectGradientAngle = (state: RootState) =>
  state.editor.gradientAngle;

export const SelectIsTrackLoading = (state: RootState) => state.track.isLoading.track;
export const SelectIsCoverDataLoading = (state: RootState) =>
  state.track.isLoading.coverData;
export const SelectIsScannableDataLoading = (state: RootState) =>
  state.track.isLoading.scannableData;
export const SelectIsCoverPalleteLoading = (state: RootState) =>
  state.track.isLoading.coverPallete;
