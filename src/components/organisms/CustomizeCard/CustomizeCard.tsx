import { Settings } from "lucide-react";
import { ColorSelector } from "../../molecules/ColorSelector";
import { Slider } from "../../molecules";
import { RootState, AppDispatch } from "../../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  changeBackground,
  changeGradientAngle,
  changeTextColor,
} from "../../../state/editor/trackEditorSlice";
import { Color } from "../../../types/types";

const CustomizeCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const coverPalette = useSelector(
    (state: RootState) => state.track.coverPallete,
    (prev, next) => {
      // Deep comparison of arrays to prevent unnecessary re-renders
      if (!prev || !next) return prev === next;
      if (prev.length !== next.length) return false;
      return prev.every(
        (color, index) =>
          color.name === next[index].name &&
          JSON.stringify(color.values) === JSON.stringify(next[index].values)
      );
    }
  );
  const gradientAngle = useSelector(
    (state: RootState) => state.editor.gradientAngle
  );

  const handleBackgoundColorChange = useCallback(
    (selected: Color[]) => {
      dispatch(changeBackground(selected));
    },
    [dispatch]
  );

  const handleTextColorChange = useCallback(
    (selected: Color[]) => {
      dispatch(changeTextColor(selected));
    },
    [dispatch]
  );
  return (
    <div className="bg-slate-100 rounded-xl mt-4 p-4 ">
      <div className="flex items-center gap-2 mb-4">
        <Settings size={24} />
        <h2 className="text-xl font-semibold">Customize</h2>
      </div>

      <div>
        <div className="grid sm:grid-cols-2 gap-3">
          <ColorSelector
            colors={coverPalette}
            maxSelect={2}
            defaultSelectedNames={["0", "1"]}
            text="Background Colors"
            onChange={handleBackgoundColorChange}
          />
          <ColorSelector
            colors={coverPalette}
            maxSelect={1}
            defaultSelectedNames={["0"]}
            text="TextColor"
            onChange={handleTextColorChange}
          />
        </div>

        <h3 className="font-medium mb-2">Gradient Background</h3>
        <Slider
          min={0}
          max={360}
          name="Angle"
          unit="º"
          initialValue={gradientAngle}
          onChange={(value) =>
            dispatch(changeGradientAngle(value))
          }
        />
      </div>
    </div>
  );
};

export default CustomizeCard;
