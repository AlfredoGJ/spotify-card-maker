import React from "react";

import { CustomizePanel } from "../CustomizePanel/CustomizePanel";
import { CustomizeControl } from "../CustomizeControl/CustomizeControl";
import { ColorSelector } from "../../molecules/ColorSelector";
import Slider from "../../molecules/Slider/Slider";
import { SelectCoverPallete } from "../../../state/track/selectors";
import { SelectGradientAngle } from "../../../state/track/selectors";
import { changeBackground } from "../../../state/editor/trackEditorSlice";
import { changeGradientAngle } from "../../../state/editor/trackEditorSlice";
import { changeTextColor } from "../../../state/editor/trackEditorSlice";

export const FrontCoverCustomizePanel = () => {
  return (
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
  );
};
