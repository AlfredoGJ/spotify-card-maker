import React, { type FC } from "react";
import { SurfaceProps } from "./types";
import classes from "./classes";

export const Surface: FC<SurfaceProps> = ({
  children,
  className = "",
  borderRadius = "lg",
  padding = "lg",
  shadow = "sm",
  opacity = 100,
  blur = "none",
  backgroundColor = "white",
  style,
}) => {
  const styles = [
    classes.base,
    classes.opacity[opacity],
    classes.borderRadius[borderRadius],
    classes.padding[padding],
    classes.shadow[shadow],
    classes.blur[blur],
    classes.backgroundColor[backgroundColor],
    className,
  ];

  return (
    <div className={styles.join(" ")} style={style}>
      {children}
    </div>
  );
};
