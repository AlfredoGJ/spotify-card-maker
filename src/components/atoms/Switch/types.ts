import { InputHTMLAttributes } from "react";
import SwitchClasses from "./Classes";

interface ISwitchProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "size" | 'onChange' | "value"
  > {
  size?: keyof typeof SwitchClasses.size;
  onChange?: (checked: boolean) => void;
}

export default ISwitchProps;
