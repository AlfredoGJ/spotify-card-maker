import { useState, type FC } from "react";
import type { GenerateCardWidgetProps } from "./types";
import { Link2, X, Music } from "lucide-react";
import { Input, Button } from "../../atoms";
import { Spinner } from "../../atoms/Spinner/Spinner";
import { SelectIsLoading } from "../../../state/track/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Info } from "../../atoms";
import { setTrackAsync } from "../../../state/track/trackSlice";
import { AppDispatch, RootState } from "../../../state/store";
import { Surface } from "../../atoms/Surface/Surface";


const GenerateCardWidget: FC<GenerateCardWidgetProps> = ({ className }) => {
  const [inputText, setInputText] = useState("");
  const isFetching = useSelector(SelectIsLoading);
  const dispatch = useDispatch<AppDispatch>();
  function handleInputChange(value: string) {
    setInputText(value);
  }

  function handleInputClear() {
    console.log("INPUT CLEAR!!!");
    setInputText("");
  }

  function handleGenerateClick() {
    const tester = /^https:\/\/open.spotify.com.*\/(\w+)\/([a-zA-Z\d]+)/;
    if (tester.test(inputText)) {
      let [, type, id] = tester.exec(inputText) as Array<string>;

      dispatch(setTrackAsync(id));
    }
  }
  return (
    <Surface className={className} >
      <div className="flex items-center gap-2 mb-4">
        <Music size={24} />
        <h2 className="text-xl font-semibold">Create your music card</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <Input
          leftSlot={<Link2 size={18} className="text-slate-400 ml-2 mr-1" />}
          rightSlot={
            inputText !== "" ? (
              <Button
                onClick={() => handleInputClear()}
                className="ml-1 mr-2"
                variant="text"
                size="xsmall"
                shape="circle"
              >
                <X width={22} height={22} />
              </Button>
            ) : (
              <div className="p-2"></div>
            )
          }
          value={inputText}
          onChange={handleInputChange}
          placeholder="Paste Spotify URI (e.g., https://open.spotify.com/track:4iV5W9uYEdYUVa79Axb7Rh) "
        />
        <Button
          disabled={isFetching}
          onClick={handleGenerateClick}
          className="flex gap-2 items-center "
        >
          <span>{isFetching ? "Generating" : "Generate"}</span>
          {isFetching && <Spinner />}
        </Button>
      </div>

      <Info
        variant="Info"
        text="To find a Spotify URI: right-click on a song, album, or playlist → Share → Copy Spotify URI"
      />
    </Surface>
  );
};

export default GenerateCardWidget;

