import { Music, Search, Eye, Settings, Link2 } from "lucide-react";
import { Input, Button, Info } from "../atoms";
import { FileInput, Slider } from "../molecules";
import { Preview } from "../organisms";
import { AppDispatch, RootState } from "../../state/store";
import { FrontCover } from "../organisms/FrontCover/FrontCover";
import { useDispatch, useSelector } from "react-redux";
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
import { Spinner } from "../atoms/Spinner/Spinner";
import { SelectIsLoading } from "../../state/track/selectors";

const AlbumGeneratorPage = () => {
  console.log("Rendered Component: AlbumGeneratorPAge");
  const dispatch = useDispatch<AppDispatch>();

  const [inputText, setInputText] = useState("");

  const track = useSelector((state: RootState) => state.track.track);

  const coverData = useSelector((state: RootState) => state.track.coverData);
  const isFetching = useSelector(SelectIsLoading);

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

  function handleInputChange(value: string) {
    setInputText(value);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Music size={24} />
          <h2 className="text-xl font-semibold">Create your music card</h2>
        </div>

        <div className="flex flex-col gap-4 mb-4">
          <Input
            leftIcon={<Link2 size={18} />}
            value={inputText}
            onChange={handleInputChange}
            placeholder="Paste Spotify URI (e.g., https://open.spotify.com/track:4iV5W9uYEdYUVa79Axb7Rh) "
          />
          <Button
            disabled={isFetching}
            onClick={handleGenerateClick}
            className="flex gap-2 items-center "
            // className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <span>{isFetching ? "Generating" : "Generate"}</span>
            {isFetching && <Spinner />}
          </Button>
        </div>

        <Info
          variant="Info"
          text="To find a Spotify URI: right-click on a song, album, or playlist → Share → Copy Spotify URI"
        />
      </div>
      <TrackCardsPreview />
    </div>
  );
};

export default AlbumGeneratorPage;
