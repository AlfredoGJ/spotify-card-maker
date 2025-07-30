import { useState, type FC } from "react";
import type { GenerateCardWidgetProps } from "./types";
import { Link2, X, Music } from "lucide-react";
import { Input, Button } from "../../atoms";
import { Spinner } from "../../atoms/Spinner/Spinner";
import {
  SelectIsCoverPalleteLoading,
  SelectIsTrackLoading,
  SelectIsCoverDataLoading,
} from "../../../state/track/selectors";
import { useDispatch, useSelector } from "react-redux";
import { Info } from "../../atoms";
import { setTrackAsync } from "../../../state/track/trackSlice";
import { AppDispatch, RootState } from "../../../state/store";
import { Surface } from "../../atoms/Surface/Surface";
import createResourceUri from "../../../utils/createResourceUri";
import { useNavigate } from "react-router";

const GenerateCardWidget: FC<GenerateCardWidgetProps> = ({
  className,
  resourceType,
  resourceId,
  headerText,
  placeholder,
  buttonText,
  infoText,
  headerIcon,
  isLoading = false,
}) => {
  const [inputText, setInputText] = useState(
    resourceId && resourceType
      ? createResourceUri(resourceType, resourceId)
      : ""
  );
  const navigate = useNavigate();

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

      if (type === "album") type = "album-poster";
      navigate(`/${type}/${id}`);
    }
  }
  return (
    <Surface className={className} shadow="md">
      <div className="flex items-center gap-2 mb-4">
        {headerIcon}
        <h2 className="text-xl font-semibold">{headerText}</h2>
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
          placeholder= {placeholder}
        />
        <Button
          disabled={isLoading}
          onClick={handleGenerateClick}
          className="flex gap-2 items-center "
        >
          <span>{isLoading ? "Generating" : "Generate"}</span>
          {isLoading && <Spinner />}
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
