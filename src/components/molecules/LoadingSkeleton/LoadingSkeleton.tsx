import React from "react";
import "./loading-skeleton.css";

interface ILoadingSkeletonProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  aspectRatio?: string;
}

export const LoadingSkeleton: React.FC<ILoadingSkeletonProps> = ({
  width,
  height,
  aspectRatio
}) => {
  return (
    <div
      style={{
        width: width ? width : "100%",
        height: height ? height : "100%",
        aspectRatio:aspectRatio ? aspectRatio : "1 / 1",
      }}
      className={`skeleton visible rounded-xl `}
    ></div>
  );
};
