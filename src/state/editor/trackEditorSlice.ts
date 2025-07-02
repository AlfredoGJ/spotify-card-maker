import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Color } from "../../types/types";
import { GradientPreset } from "../../utils/gradients/gradients";

interface TrackEditor {
  backgroundPreset: GradientPreset;
  background: Array<Color>;
  text: Color;
  scannableBackground: Color;
  scannableText: Color;
  gradientAngle: number;
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
const initialState: TrackEditor = {
  backgroundPreset: GradientPreset.preset1,
  background: [defaultColor, whiteColor],
  text: defaultColor,
  scannableBackground: defaultColor,
  scannableText: whiteColor,
  gradientAngle: 33,
};

const trackEditorSlice = createSlice({
  name: "Editor",
  initialState,
  reducers: {
    changeBackground: (state, action: PayloadAction<Color[]>) => {
      state.background = action.payload;
    },
    changeBackgroundPreset:(state,action:PayloadAction<GradientPreset>)=>{
      state.backgroundPreset = action.payload
    },
    changeTextColor: (state, action: PayloadAction<Color[]>) => {
      state.text = action.payload[0];
    },
    changeScannableBackground: (state, action: PayloadAction<Color[]>) => {
      state.scannableBackground = action.payload[0];
    },
    changeScannableText: (state, action: PayloadAction<Color[]>) => {
      state.scannableText = action.payload[0];
    },
    changeGradientAngle: (state, action) => {
      state.gradientAngle = action.payload;
    },
  },
});

export const {
  changeBackground,
  changeBackgroundPreset,
  changeScannableBackground,
  changeScannableText,
  changeTextColor,
  changeGradientAngle,
} = trackEditorSlice.actions;
export default trackEditorSlice.reducer;
