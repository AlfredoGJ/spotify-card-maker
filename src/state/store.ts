import { configureStore } from "@reduxjs/toolkit";
import editorReducer from './editor/trackEditorSlice'
import trackReducer from './track/trackSlice'

export const store = configureStore({
  reducer: {
    editor:editorReducer,
    track: trackReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
