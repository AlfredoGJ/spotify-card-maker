import { RootState } from "../store";

export const SelectCoverPallete = (state: RootState) =>
  state.track.coverPallete;

export const SelectTrack = (state: RootState) => state.track.track;

export const SelectGradientAngle = (state: RootState) =>
  state.editor.gradientAngle;

export const SelectIsLoading = (state: RootState) => state.track.isloading;
