import React from "react";

import { CustomizePanel } from "../CustomizePanel/CustomizePanel";
import { CustomizeControl } from "../CustomizeControl/CustomizeControl";
import { ColorSelector } from "../../molecules/ColorSelector";
import { SelectCoverPallete } from "../../../state/track/selectors";
import { changeScannableBackground } from "../../../state/editor/trackEditorSlice";
import { changeScannableText } from "../../../state/editor/trackEditorSlice";

export const BackCoverCustomizePanel = () => {
  return (
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
  );
};
