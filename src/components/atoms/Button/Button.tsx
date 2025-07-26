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
  size?: "small" | "medium" | "large" | "xsmall";
  variant?: "primary" | "text"| 'secondary';
  shape?: "default" | "rounded" | "roundedLeft" | "roundedRight" | "circle";
  className?:string
  disabled?:boolean
}

export const Button: FC<IButtonProps> = ({
  children,
  onClick,
  size = "medium",
  variant = "primary",
  shape = "rounded",
  className,
  disabled,
  ...rest
}: IButtonProps) => {
  let sizeClasses = Classes.size[size];
  let variantClasses = Classes.variant[variant];
  let shapeClasses = Classes.shape[shape];
  return (
    <Btn as={Fragment}>
      {({ active, hover, focus }) => (
        <button
          disabled={disabled
          }
          className={`${
            Classes["default"]
          } ${sizeClasses} ${variantClasses} ${shapeClasses} ${
            hover && Classes["hover"]
          }
          ${focus && Classes["focus"]}
          ${className}
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
