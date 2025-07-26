import { RootState } from "../store";

export const SelectGradientAngle = (state: RootState) =>
  state.editor.gradientAngle;
export const SelectBackgroundPreset = (state: RootState) =>
  state.editor.backgroundPreset;
export const SelectShowScannable = (state:RootState) =>
    state.editor.showScannable;

