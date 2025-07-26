import React from "react";

import { CustomizePanel } from "../CustomizePanel/CustomizePanel";
import { CustomizeControl } from "../CustomizeControl/CustomizeControl";
import { ColorSelector } from "../../molecules/ColorSelector";
import Slider from "../../molecules/Slider/Slider";
import { SelectCoverPallete } from "../../../state/track/selectors";
import {
  SelectGradientAngle,
  SelectBackgroundPreset,
  SelectShowScannable,
} from "../../../state/editor/selectors";
import {
  changeBackground,
  changeBackgroundPreset,
  changeGradientAngle,
  changeShowScannable,
  changeTextColor,
} from "../../../state/editor/trackEditorSlice";
import { ButtonGroup } from "../../molecules/ButtonGroup/ButtonGroup";
import { Button } from "../../atoms";
import { Switch } from "../../atoms/Switch/Switch";

export const FrontCoverCustomizePanel = () => {
  return (
    <CustomizePanel>
      <CustomizeControl
        label="Background Presets"
        className="sm:col-span-2"
        Component={ButtonGroup}
        children={[
          <Button name="preset-1"> 1</Button>,
          <Button name="preset-2">2</Button>,
          <Button name="preset-3"> 3</Button>,
          <Button name="preset-5"> 4</Button>,
          <Button name="preset-6"> 5</Button>,
        ]}
        defaultSelectedName="preset-1"
        selector={SelectBackgroundPreset}
        action={changeBackgroundPreset}
        controlProps={{
          valueProp: "selectedName",
          onChangeProp: "onSelectionChange",
        }}
      />
      <CustomizeControl
        label="Background Colors"
        Component={ColorSelector}
        selector={SelectCoverPallete}
        action={changeBackground}
        controlProps={{ valueProp: "colors", onChangeProp: "onChange" }}
        defaultSelectedNames={["0", "1", "2"]}
        maxSelect={3}
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
        className="sm:col-span-2"
        label="Playing"
        Component={Slider}
        selector={SelectGradientAngle}
        action={changeGradientAngle}
        controlProps={{
          valueProp: "initialValue",
          onChangeProp: "onChange",
        }}
        min={0}
        max={100}
        name="Percent"
        unit="%"
      />
      <CustomizeControl
        label="Show Scannable"
        Component={Switch}
        selector={SelectShowScannable}
        action={changeShowScannable}
        controlProps={{ valueProp: "checked", onChangeProp: "onChange" }}
      />
    </CustomizePanel>
  );
};
