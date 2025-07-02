import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Color, Track } from "../../types/types";
import sampleData from "../../data/sampleData.json";
import { getImage, getScannable, getTrack } from "../../utils/api/getResource";
import generatePaletteFromImage from "../../utils/generatePaletteFromImage";

const onlyInMyDreams = sampleData.tracks.OnlyInMyDreams
const { id, name, duration_ms, artists, album, scannables } =onlyInMyDreams.track
const { scannableSVG } = sampleData.tracks.OnlyInMyDreams;
const {grayscale} = sampleData.palettes
interface TrackState {
  isLoading: {
    track: boolean;
    coverData: boolean;
    scannableData: boolean;
    coverPallete: boolean;
  };
  track?: Track;
  coverData?: string;
  scannableData?: string;
  coverPallete?: Array<Color>;
}

const initialState: TrackState = {
  isLoading: {
    track: false,
    coverData: false,
    scannableData: false,
    coverPallete: false,
  },
  track: {
    id,
    name: name,
    duration_ms: duration_ms,
    artists: artists,
    album,
    scannables,
  },
  coverData: "https://i.scdn.co/image/ab67616d0000b2730924b9c6232d2348d4efa0dc",
  coverPallete: grayscale,
  scannableData:scannableSVG
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
    setIsLoading: (state) => {
      state.isLoading.coverData = true;
      state.isLoading.scannableData = true;
      state.isLoading.coverPallete = true;
      state.isLoading.track = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setTrackAsync.fulfilled, (state, action) => {
        state.track = action.payload;
        state.isLoading.track = false;
      })
      .addCase(setTrackAsync.pending, (state) => {
        state.isLoading.track = true;
      })
      .addCase(setCoverDataAsync.fulfilled, (state, action) => {
        state.coverData = action.payload;
        state.isLoading.coverData = false;
      })
      .addCase(setCoverDataAsync.pending, (state) => {
        state.isLoading.coverData = true;
      })
      .addCase(setScannableDataAsync.fulfilled, (state, action) => {
        state.scannableData = action.payload;
        state.isLoading.scannableData = false;
      })
      .addCase(setScannableDataAsync.pending, (state) => {
        state.isLoading.scannableData = true;
      })
      .addCase(setCoverPaletteAsync.fulfilled, (state, action) => {
        state.coverPallete = action.payload;
        state.isLoading.coverPallete = false;
      })
      .addCase(setCoverPaletteAsync.pending, (state) => {
        state.isLoading.coverPallete = true;
      });
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
export const {
  setCoverData,
  setCoverPallete,
  setScannableData,
  setTrack,
  setIsLoading,
} = trackSlice.actions;
