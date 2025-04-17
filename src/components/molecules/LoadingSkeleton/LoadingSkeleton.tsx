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

  const className = isLoading? 'visible': 'hidden'

  return isLoading ? (
    <div className={`skeleton ${className} w-full h-full`}></div>
  ) : (
    <div className="skeleton-content">{children}</div>
  );
};
