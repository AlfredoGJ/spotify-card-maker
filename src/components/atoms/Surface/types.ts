import classes from "./classes";

export type SurfaceProps = {
  children: React.ReactNode;
  className?: string;
  borderRadius?: keyof typeof classes.borderRadius;
  padding?: keyof typeof classes.padding;
  shadow?: keyof typeof classes.shadow;
};
