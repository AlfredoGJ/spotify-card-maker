import React, { type FC } from "react";
import { SurfaceProps } from "./types";
import SurfaceClasses from "./classes";
export const Surface: FC<SurfaceProps> = ({
  children,
  className = "",
  borderRadius = "lg",
  padding = "lg",
  shadow = "sm",
}) => {
  const classes = `${SurfaceClasses.base} ${SurfaceClasses.borderRadius[borderRadius]} ${SurfaceClasses.padding[padding]} ${SurfaceClasses.shadow[shadow]} ${className}`;
  return <div className={classes}>{children}</div>;
};
