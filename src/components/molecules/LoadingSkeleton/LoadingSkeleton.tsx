import React from "react";
import "./loading-skeleton.css";

interface ILoadingSkeletonProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
  width?: number;
  height?: number;
}

export const LoadingSkeleton = ({
  isLoading,
  children,
  width,
  height,
}: ILoadingSkeletonProps) => {
  const className = isLoading ? "visible" : "hidden";

  return isLoading ? (
    <div
      className={`skeleton ${className} ${
        width ? `w-[${width}]px` : "w-full"
      } ${height ? `w-[${width}]px` : "h-full"}`}
    ></div>
  ) : (
    <div className="skeleton-content">
      {children}
    </div>
  );
};
