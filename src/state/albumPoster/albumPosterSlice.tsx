import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Album, Color } from "../../types/types";
import sampleData from "../../data/sampleData.json";
import {
  getImage,
  getScannable,
  getAlbum,
} from "../../utils/api/getResource";
import generatePaletteFromImage from "../../utils/generatePaletteFromImage";
const triState = sampleData.albums.TriState;

const {
  name,
  id,
  artists,
  genres,
  release_date,
  total_tracks,
  images,
  scannables,
  label,
  tracks
} = triState.album;
const { grayscale } = sampleData.palettes

interface TrackState {
  isLoading: {
    album?: boolean;
    coverData?: boolean;
    scannableData?: boolean;
    coverPallete?: boolean;
  };
  album?: Album;
  coverPallete?: Array<Color>;
  scannableData?: string;
  coverData?: string;
}

const initialState: TrackState = {
  isLoading: {
    album: true,
    coverData: true,
    scannableData: true,
    coverPallete: true,
  },
  coverPallete:grayscale,
  scannableData: "",
  coverData: "",
  album: {
    name,
    id,
    artists,
    genres,
    release_date,
    total_tracks,
    images,
    scannables,
    label,
    tracks
  },
};

const AlbumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setAlbum: (state, action: PayloadAction<Album>) => {
      state.album = action.payload;
    },
    setCoverData: (state, action: PayloadAction<string>) => {
      state.coverData = action.payload;
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
      state.isLoading.album = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setAlbumAsync.fulfilled, (state, action) => {
        state.album = action.payload;
        state.isLoading.album = false;
      })
      .addCase(setAlbumAsync.pending, (state) => {
        state.isLoading.album = true;
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

export const setAlbumAsync = createAsyncThunk(
  "album/setAlbum",
  async (albumId: string) => {
    return getAlbum(albumId);
  }
);

export const setCoverDataAsync = createAsyncThunk(
  "album/setCoverData",
  async (imageUrl: string) => {
    return getImage(imageUrl);
  }
);
export const setScannableDataAsync = createAsyncThunk(
  "album/setScannableData",
  async (scannableUrl: string) => {
    return getScannable(scannableUrl);
  }
);
export const setCoverPaletteAsync = createAsyncThunk(
  "album/setCoverPalette",
  async (imageData: string) => {
    return generatePaletteFromImage(imageData, 8);
  }
);

export default AlbumSlice.reducer;
export const {
  setCoverData,
  setCoverPallete,
  setScannableData,
  setAlbum,
  setIsLoading,
} = AlbumSlice.actions;
