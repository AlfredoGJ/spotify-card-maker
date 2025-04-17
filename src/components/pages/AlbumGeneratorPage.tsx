import { Music, Search, Eye, Settings } from "lucide-react";
import { Input, Button, Info } from "../atoms";
import { FileInput, Slider } from "../molecules";
import { Preview } from "../organisms";
import { AppDispatch, RootState } from "../../state/store";
import { FrontCover } from "../organisms/FrontCover/FrontCover";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  setCoverDataAsync,
  setTrackAsync,
  setScannableDataAsync,
  setCoverPaletteAsync,
} from "../../state/track/trackSlice";

import {
  changeBackground,
  changeGradientAngle,
  changeTextColor,
} from "../../state/editor/trackEditorSlice";
import TrackCardsPreview from "../templates/TrackCardsPreview";
import React from "react";
import { ColorSelector } from "../molecules/ColorSelector";
import { Color } from "../../types/types";

const AlbumGeneratorPage = () => {
  console.log("Rendered Component: AlbumGeneratorPAge");
  const dispatch = useDispatch<AppDispatch>();

  const frontCoverRef = useRef(null);
  const backCoverRef = useRef(null);

  const [inputText, setInputText] = useState("");

  const track = useSelector((state: RootState) => state.track.track);
  
  const coverData = useSelector((state: RootState) => state.track.coverData);
  

  useEffect(() => {
    if (track) {
      dispatch(setCoverDataAsync(track.album.images[0].url));
      dispatch(setScannableDataAsync(track.scannables[0].uri));
    }
  }, [track]);

  useEffect(() => {
    if (coverData) {
      dispatch(setCoverPaletteAsync(coverData));
    }
  }, [coverData]);

  function handleGenerateClick() {
    const tester = /^https:\/\/open.spotify.com.*\/(\w+)\/([a-zA-Z\d]+)/;
    if (tester.test(inputText)) {
      let [, type, id] = tester.exec(inputText) as Array<string>;

      dispatch(setTrackAsync(id));
    }
  }
  

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      {/* Input Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Music size={24} />
          <h2 className="text-xl font-semibold">Create your music card</h2>
        </div>

        <div className="flex gap-4 mb-4">
          <Input value={inputText} onChange={(value) => setInputText(value)} />
          <Button
            onClick={handleGenerateClick}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Generate
          </Button>
        </div>

        <Info
          variant="Info"
          text="To find a Spotify URI: right-click on a song, album, or playlist → Share → Copy Spotify URI"
        />

        <FileInput />

        <h3 className="font-medium mb-2">Quick templates</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <div className="h-16 w-24 min-w-24 rounded-lg cursor-pointer bg-gradient-to-br from-orange-500 to-orange-900 ring-2 ring-emerald-500"></div>
          <div className="h-16 w-24 min-w-24 rounded-lg cursor-pointer bg-gradient-to-br from-blue-500 to-blue-900"></div>
          <div className="h-16 w-24 min-w-24 rounded-lg cursor-pointer bg-gradient-to-br from-teal-500 to-teal-900"></div>
          <div className="h-16 w-24 min-w-24 rounded-lg cursor-pointer bg-gradient-to-br from-purple-500 to-purple-900"></div>
          <div className="h-16 w-24 min-w-24 rounded-lg cursor-pointer bg-gradient-to-br from-pink-500 to-pink-900"></div>
          <div className="h-16 w-24 min-w-24 rounded-lg cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900"></div>
        </div>
      </div>
      <TrackCardsPreview />
      
    </div>
  );
};

export default AlbumGeneratorPage;
