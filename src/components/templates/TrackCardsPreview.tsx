import { Preview } from "../organisms";
import { BackCover } from "../organisms/BackCover/BackCover";
import { FrontCover } from "../organisms/FrontCover/FrontCover";
import { RootState } from "../../state/store";
import { useSelector } from "react-redux";
import CustomizeCard from "../organisms/CustomizeCard/CustomizeCard";
import { ColorSelector } from "../molecules/ColorSelector";
import CustomizeControl from "../organisms/CustomizeControl/CustomizeControl";
import { CustomizePanel } from "../organisms/CustomizePanel/CustomizePanel";
import {
  SelectCoverPallete,
  SelectGradientAngle,
  SelectIsLoading,
} from "../../state/track/selectors";
import {
  changeBackground,
  changeGradientAngle,
  changeScannableBackground,
  changeScannableText,
  changeTextColor,
} from "../../state/editor/trackEditorSlice";
import { Slider } from "../molecules";
import { LoadingSkeleton } from "../molecules/LoadingSkeleton/LoadingSkeleton";

interface ITrackCardsPreview {}

const TrackCardsPreview = ({}: ITrackCardsPreview) => {
  console.log("Component Rendered: TrackCardsPreview");
  const background = useSelector((state: RootState) => state.editor.background);
  const text = useSelector((state: RootState) => state.editor.text);
  const scannableBackground = useSelector(
    (state: RootState) => state.editor.scannableBackground
  );
  const scannableText = useSelector(
    (state: RootState) => state.editor.scannableText
  );
  const gradientAngle = useSelector(
    (state: RootState) => state.editor.gradientAngle
  );


  const track = useSelector((state: RootState) => state.track.track);
  const coverData = useSelector((state: RootState) => state.track.coverData);
  const scannableData = useSelector(
    (state: RootState) => state.track.scannableData
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <Preview
        CustomizeComponent={
          <CustomizePanel>
            <CustomizeControl
              label="Background Colors"
              Component={ColorSelector}
              selector={SelectCoverPallete}
              action={changeBackground}
              controlProps={{ valueProp: "colors", onChangeProp: "onChange" }}
              defaultSelectedNames={["0", "1"]}
              maxSelect={2}
            />
            <CustomizeControl
              label="Text Color"
              Component={ColorSelector}
              selector={SelectCoverPallete}
              action={changeTextColor}
              controlProps={{ valueProp: "colors", onChangeProp: "onChange" }}
              text=""
              defaultSelectedNames={["0"]}
              maxSelect={1}
            />
            <CustomizeControl
              label="Gradient Angle"
              Component={Slider}
              selector={SelectGradientAngle}
              action={changeGradientAngle}
              controlProps={{
                valueProp: "initialValue",
                onChangeProp: "onChange",
              }}
              min={0}
              max={360}
              name="Angle"
              unit="º"
            />
          </CustomizePanel>
        }
      >
        <FrontCover
          gradientAngle={gradientAngle}
          coverData={coverData!}
          track={track!}
          firstBgColor={background[0]}
          secondBgColor={background[1]}
          textColor={text}
        />
      </Preview>
      <Preview
        CustomizeComponent={
          <CustomizePanel>
            <CustomizeControl
              label="Background Color"
              Component={ColorSelector}
              selector={SelectCoverPallete}
              action={changeScannableBackground}
              controlProps={{ valueProp: "colors", onChangeProp: "onChange" }}
              defaultSelectedNames={["0"]}
              maxSelect={1}
            />
            <CustomizeControl
              label="Text Color"
              Component={ColorSelector}
              selector={SelectCoverPallete}
              action={changeScannableText}
              controlProps={{ valueProp: "colors", onChangeProp: "onChange" }}
              defaultSelectedNames={["1"]}
              maxSelect={1}
            />
          </CustomizePanel>
        }
      >
        <BackCover
          coverData={coverData!}
          scannableData={scannableData!}
          scannableBackground={scannableBackground!}
          scannableText={scannableText}
        />
      </Preview>
    </div>
  );
};

export default TrackCardsPreview;
