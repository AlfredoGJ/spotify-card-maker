import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color } from "../../types/types";
import {
  GradientPreset,
  presetGradient1,
} from "../../utils/gradients/gradients";

interface AlbumPosterEditor {
  backgroundPreset: GradientPreset;
  backgroundColors: Array<Color>;
  textColor: Array<Color>;
  visiblePalette: Array<Color>;
  borderColor: Array<Color>;
  scannableColor: Array<Color>;
  variant: string;
}

const defaultColor: Color = {
  name: "black",
  values: { rgb: { r: 0, g: 0, b: 0 }, hex: "#000" },
};

const whiteColor: Color = {
  name: "white",
  values: {
    rgb: { r: 255, g: 255, b: 255 },
    hex: "#fff",
  },
};
const initialState: AlbumPosterEditor = {
  backgroundPreset: GradientPreset.preset1,
  backgroundColors: [defaultColor, whiteColor],
  textColor: [defaultColor],
  borderColor: [defaultColor],
  variant: "default",
  visiblePalette: [defaultColor, whiteColor],
  scannableColor: [defaultColor],
};

const albumPosterEditorSlice = createSlice({
  name: "albumPosterEditor",
  initialState,
  reducers: {
    changeBackgroundColors: (state, action: PayloadAction<Color[]>) => {
      state.backgroundColors = action.payload;
    },
    changeBackgroundPreset: (state, action: PayloadAction<GradientPreset>) => {
      state.backgroundPreset = action.payload;
    },
    changeTextColor: (state, action: PayloadAction<Color[]>) => {
      state.textColor = action.payload;
    },
    changeBorderColor: (state, action: PayloadAction<Color[]>) => {
      state.borderColor = action.payload;
    },
    changeVariant: (state, action: PayloadAction<string>) => {
      state.variant = action.payload;
    },
    changeVisiblePalette: (state, action: PayloadAction<Color[]>) => {
      state.visiblePalette = action.payload;
    },
    changeScannableColor: (state, action: PayloadAction<Color[]>) => {
      state.scannableColor = action.payload;
    },
  },
});

export const {
  changeBackgroundColors,
  changeBackgroundPreset,
  changeBorderColor,
  changeTextColor,
  changeVariant,
  changeVisiblePalette,
  changeScannableColor,
} = albumPosterEditorSlice.actions;
export default albumPosterEditorSlice.reducer;
