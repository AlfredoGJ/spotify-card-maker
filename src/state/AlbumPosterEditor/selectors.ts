import { RootState } from "../store";

export const SelectBackgroundPreset = (state: RootState) =>
  state.albumPosterEditor.backgroundPreset;
export const SelectBackgroundColors = (state: RootState) =>
  state.albumPosterEditor.backgroundColors;
export const SelectTextColor = (state: RootState) =>
  state.albumPosterEditor.textColor;
export const SelectBorderColor = (state: RootState) =>
  state.albumPosterEditor.borderColor;
export const SelectVariant = (state: RootState) =>
  state.albumPosterEditor.variant;
export const SelectVisiblePalette = (state: RootState) =>
  state.albumPosterEditor.visiblePalette;
export const SelectScannableColor = (state: RootState) =>
  state.albumPosterEditor.scannableColor;