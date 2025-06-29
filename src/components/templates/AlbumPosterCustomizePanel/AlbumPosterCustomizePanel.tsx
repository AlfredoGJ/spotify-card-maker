import React from "react";

import { CustomizePanel } from "../../organisms/CustomizePanel/CustomizePanel";
import { CustomizeControl } from "../../organisms/CustomizeControl/CustomizeControl";
import { ColorSelector } from "../../molecules/ColorSelector";
import Slider from "../../molecules/Slider/Slider";
import { ButtonGroup } from "../../molecules/ButtonGroup/ButtonGroup";
import { Button } from "../../atoms";
import { SelectBackgroundPreset, SelectTextColor, SelectVariant } from "../../../state/AlbumPosterEditor/selectors";
import { changeBackgroundColors, changeBackgroundPreset, changeBorderColor, changeScannableColor, changeTextColor, changeVariant, changeVisiblePalette } from "../../../state/AlbumPosterEditor/AlbumPosterEditorSlice";
import { SelectCoverPallete } from "../../../state/albumPoster/selectors";

export const AlbumPosterCustomizePanel = () => {
  return (
    <CustomizePanel>
      {/* <CustomizeControl
        label="Poster Variant"
        className="sm:col-span-2"
        Component={ButtonGroup}
        children={
          [
            <Button name="preset-1"> 1</Button>,
            <Button name="preset-2">2</Button>,
            <Button name="preset-3"> 3</Button>,
            <Button name="preset-5"> 4</Button>,
            <Button name="preset-6"> 5</Button>,
            <Button name="preset-7"> 6</Button>,
          ]
        }
        defaultSelectedName="preset-1"
        selector={SelectVariant}
        action={changeVariant}
        controlProps={{
          valueProp: "selectedName",
          onChangeProp: "onSelectionChange",
        }}
      />
      <CustomizeControl
        label="Background Presets"
        className="sm:col-span-2"
        Component={ButtonGroup}
        children={
          [
            <Button name="preset-1"> 1</Button>,
            <Button name="preset-2">2</Button>,
            <Button name="preset-3"> 3</Button>,
            <Button name="preset-5"> 4</Button>,
            <Button name="preset-6"> 5</Button>,
          ]
        }
        defaultSelectedName="preset-1"
        selector={SelectBackgroundPreset}
        action={changeBackgroundPreset}
        controlProps={{
          valueProp: "selectedName",
          onChangeProp: "onSelectionChange",
        }}
      /> */}
      <CustomizeControl
        label="Background Color"
        Component={ColorSelector}
        selector={SelectCoverPallete}
        action={changeBackgroundColors}
        controlProps={{ valueProp: "colors", onChangeProp: "onChange" }}
        defaultSelectedNames={["1"]}
        maxSelect={1}
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
        label="Frame Color"
        Component={ColorSelector}
        selector={SelectCoverPallete}
        action={changeBorderColor}
        controlProps={{ valueProp: "colors", onChangeProp: "onChange" }}
        text=""
        defaultSelectedNames={["0"]}
        maxSelect={1}
      />
      <CustomizeControl
        label="Visible Palette"
        Component={ColorSelector}
        selector={SelectCoverPallete}
        action={changeVisiblePalette}
        controlProps={{ valueProp: "colors", onChangeProp: "onChange" }}
        text=""
        defaultSelectedNames={["0", "1", "2", "3", "4"]}
        maxSelect={5}
      />
      <CustomizeControl
        label="Scannable Color"
        Component={ColorSelector}
        selector={SelectCoverPallete}
        action={changeScannableColor}
        controlProps={{ valueProp: "colors", onChangeProp: "onChange" }}
        text=""
        defaultSelectedNames={["0"]}
        maxSelect={1}
      />
      
    </CustomizePanel>
  );
};
