import classes from "./classes";

export type SurfaceProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: keyof typeof classes.borderRadius;
  padding?: keyof typeof classes.padding;
  shadow?: keyof typeof classes.shadow;
  opacity?:keyof typeof classes.opacity
  blur?: keyof typeof classes.blur,
  backgroundColor?: keyof typeof classes.backgroundColor
};
