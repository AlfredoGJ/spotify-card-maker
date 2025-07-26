import React, { FC, useEffect, useState } from "react";
import SwitchClasses from "./Classes";
import ISwitchProps from "./types";

export const Switch: FC<ISwitchProps> = ({
  disabled,
  checked,
  size = "medium",
  onChange,
}) => {
  const [isChecked, setIschecked] = useState<boolean>(
    checked !== undefined ? checked : false
  );
  useEffect(() => {
    setIschecked(checked!)
  }, [checked]);
  const defaultStyles = SwitchClasses.default;
  const sizeStyles = SwitchClasses.size[size];
  const isDisabledStyles = disabled
    ? SwitchClasses.disabled
    : SwitchClasses.enabled;
  const isCheckedStyles = isChecked
    ? SwitchClasses.checked
    : SwitchClasses.notChecked;

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    // if the component value is not controlled
    if (checked === undefined) setIschecked(!isChecked);
    onChange && onChange(!isChecked);
  }

  return (
    <div className="flex" onClick={handleClick}>
      <input type="checkbox" className="appearance-none relative w-0 h-0" />

      <div
        className={`${defaultStyles.Root} ${sizeStyles.Root} ${isDisabledStyles.Root} ${isCheckedStyles.Root}`}
      >
        <div
          className={`${defaultStyles.Tip} ${sizeStyles.Tip} ${isCheckedStyles.Tip}`}
        ></div>
      </div>
    </div>
  );
};
