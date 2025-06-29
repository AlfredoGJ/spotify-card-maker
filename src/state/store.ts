import { configureStore } from "@reduxjs/toolkit";
import editorReducer from './editor/trackEditorSlice'
import trackReducer from './track/trackSlice'
import albumReducer from './albumPoster/albumPosterSlice'
import albumPosterEditorReducer from './AlbumPosterEditor/AlbumPosterEditorSlice'

export const store = configureStore({
  reducer: {
    editor:editorReducer,
    track: trackReducer,
    album: albumReducer,
    albumPosterEditor: albumPosterEditorReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
