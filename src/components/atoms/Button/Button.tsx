import React, {
  AllHTMLAttributes,
  FC,
  Fragment,
  HtmlHTMLAttributes,
} from "react";
import { Button as Btn } from "@headlessui/react";
import Classes from "./Classes";

export interface IButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement>,
    Pick<AllHTMLAttributes<HTMLButtonElement>, "name"> {
  size?: "small" | "medium" | "large";
  variant?: "primary" | "text";
  shape?: "default" | "rounded" |"roundedLeft" | "roundedRight"
}

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  size = "medium",
  variant = "primary",
  shape = 'rounded',
  ...rest
}: IButtonProps) => {
  let sizeClasses = Classes.size[size];
  let variantClasses = Classes.variant[variant];
  let shapeClasses = Classes.shape[shape];
  return (
    <Btn as={Fragment}>
      {({ active, hover, focus }) => (
        <button
          className={`${Classes["default"]} ${sizeClasses} ${variantClasses} ${shapeClasses} ${
            hover && Classes["hover"]
          }
          ${focus && Classes["focus"]}
           `}
          onClick={onClick}
          {...rest}
        >
          {children}
        </button>
      )}
    </Btn>
  );
};
