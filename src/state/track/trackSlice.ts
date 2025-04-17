import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Color, Track } from "../../types/types";
import sampleData from "../../data/sampleData.json";
import { getImage, getScannable, getTrack } from "../../utils/api/getResource";
import generatePaletteFromImage from "../../utils/generatePaletteFromImage";
import generateDefaultPalette from "../../utils/generateDefaultPalette";
const { id, name, duration_ms, artists, album, scannables,  } =
  sampleData.tracks.OnlyInMyDreams.track;

const {coverPallete} = sampleData.tracks.OnlyInMyDreams

interface TrackState {
  isloading:boolean;
  track?: Track;
  coverData?: string;
  scannableData?: string;
  coverPallete: Array<Color>;
}

const initialState: TrackState = {
  isloading:false,
  track: {
    id,
    name: name,
    duration_ms: duration_ms,
    artists: artists,
    album,
    scannables,
  },
  coverData:'https://i.scdn.co/image/ab67616d0000b2730924b9c6232d2348d4efa0dc',
  coverPallete: coverPallete,
  scannableData: `<svg width="640" height="160" viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="0" y="0" width="400" height="100" fill="#000000"/>
    <rect x="100.00" y="44.50" width="6.71" height="11.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="112.42" y="30.50" width="6.71" height="39.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="124.84" y="37.50" width="6.71" height="25.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="137.27" y="27.00" width="6.71" height="46.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="149.69" y="34.00" width="6.71" height="32.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="162.11" y="34.00" width="6.71" height="32.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="174.53" y="37.50" width="6.71" height="25.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="186.96" y="44.50" width="6.71" height="11.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="199.38" y="23.50" width="6.71" height="53.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="211.80" y="44.50" width="6.71" height="11.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="224.22" y="23.50" width="6.71" height="53.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="236.64" y="20.00" width="6.71" height="60.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="249.07" y="20.00" width="6.71" height="60.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="261.49" y="23.50" width="6.71" height="53.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="273.91" y="41.00" width="6.71" height="18.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="286.33" y="41.00" width="6.71" height="18.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="298.76" y="44.50" width="6.71" height="11.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="311.18" y="37.50" width="6.71" height="25.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="323.60" y="30.50" width="6.71" height="39.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="336.02" y="23.50" width="6.71" height="53.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="348.44" y="44.50" width="6.71" height="11.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="360.87" y="30.50" width="6.71" height="39.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <rect x="373.29" y="44.50" width="6.71" height="11.00" rx="3.36" ry="3.36" fill="#ffffff"/>
    <g transform="translate(20,20)">
        <path fill="#ffffff" d="M30,0A30,30,0,1,1,0,30,30,30,0,0,1,30,0M43.73,43.2a1.85,1.85,0,0,0-.47-2.43,5,5,0,0,0-.48-.31,30.64,30.64,0,0,0-5.92-2.72,37.07,37.07,0,0,0-11.56-1.84c-1.33.07-2.67.12-4,.23a52.44,52.44,0,0,0-7.08,1.12,3.45,3.45,0,0,0-.54.16,1.83,1.83,0,0,0-1.11,2.08A1.79,1.79,0,0,0,14.37,41a4.29,4.29,0,0,0,.88-.12,48.93,48.93,0,0,1,8.66-1.15,35.33,35.33,0,0,1,6.75.37,28.29,28.29,0,0,1,10.25,3.61,4.77,4.77,0,0,0,.5.27,1.85,1.85,0,0,0,2.33-.74M47.41,35a2.34,2.34,0,0,0-.78-3.19l-.35-.21a35.72,35.72,0,0,0-7.38-3.3,45.39,45.39,0,0,0-15.7-2.13,41.19,41.19,0,0,0-7.39.92c-1,.22-2,.48-2.94.77A2.26,2.26,0,0,0,11.29,30a2.32,2.32,0,0,0,1.44,2.2,2.47,2.47,0,0,0,1.67,0,37,37,0,0,1,10.38-1.46,43,43,0,0,1,7.91.74,35.46,35.46,0,0,1,9.58,3.18c.66.34,1.3.72,1.95,1.08A2.33,2.33,0,0,0,47.41,35m.35-8.49A2.79,2.79,0,0,0,52,24.11c0-.2,0-.4-.08-.6a2.78,2.78,0,0,0-1.4-1.85,35.91,35.91,0,0,0-6.41-2.91,56.19,56.19,0,0,0-16.86-2.89,58.46,58.46,0,0,0-7,.21,48.31,48.31,0,0,0-6.52,1c-.87.2-1.73.42-2.58.7a2.73,2.73,0,0,0-1.85,2.68,2.79,2.79,0,0,0,2,2.61,2.9,2.9,0,0,0,1.6,0c.87-.23,1.75-.47,2.63-.66a45.52,45.52,0,0,1,7.26-.91,57.42,57.42,0,0,1,6.4,0,53.7,53.7,0,0,1,6.11.72,42.63,42.63,0,0,1,8.49,2.35,33.25,33.25,0,0,1,4,2"/>
    </g>
</svg>
`,
};

const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {
    setTrack: (state, action) => {
      state.track = action.payload;
    },
    setCoverData: (state, action) => {
      const imageCoverData = action.payload;
      state.coverData = imageCoverData;
    },
    setScannableData: (state, action) => {
      state.scannableData = action.payload;
    },
    setCoverPallete: (state, action) => {
      state.coverPallete = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setTrackAsync.fulfilled, (state, action) => {
        state.track = action.payload;
      })
      .addCase(setCoverDataAsync.fulfilled, (state, action) => {
        state.coverData = action.payload;
      })
      .addCase(setScannableDataAsync.fulfilled, (state, action) => {
        state.scannableData = action.payload;
      })
      .addCase(setCoverPaletteAsync.fulfilled, (state, action) => {
        state.coverPallete = action.payload;
        state.isloading= false
      })
      .addCase(setTrackAsync.pending, (state) =>{
        state.isloading= true
      })
  },
});

export const setTrackAsync = createAsyncThunk(
  "track/setTrack",
  async (trackId: string) => {
    return getTrack(trackId);
  }
);

export const setCoverDataAsync = createAsyncThunk(
  "track/setCoverData",
  async (imageUrl: string) => {
    return getImage(imageUrl);
  }
);
export const setScannableDataAsync = createAsyncThunk(
  "track/setScannableData",
  async (scannableUrl: string) => {
    return getScannable(scannableUrl);
  }
);
export const setCoverPaletteAsync = createAsyncThunk(
  "track/setCoverPalette",
  async (imageData: string) => {
    return generatePaletteFromImage(imageData, 8);
  }
);

export default trackSlice.reducer;
export const { setCoverData, setCoverPallete, setScannableData, setTrack } =
  trackSlice.actions;
