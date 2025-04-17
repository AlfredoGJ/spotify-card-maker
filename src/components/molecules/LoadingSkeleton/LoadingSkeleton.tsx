import React from "react";
import "./loading-skeleton.css";

interface ILoadingSkeletonProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isLoading: boolean;
}

export const LoadingSkeleton = ({
  isLoading,
  children,
}: ILoadingSkeletonProps) => {
  return isLoading ? (
    <div className="skeleton w-full h-full"></div>
  ) : (
    <div>{children}</div>
  );
};
