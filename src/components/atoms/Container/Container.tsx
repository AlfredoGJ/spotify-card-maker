interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "page" | "fluid";
  
}

const Container: React.FC<IContainerProps> = ({
  children,
  variant = "page",
  className
}) => {
  const ContainerClasses = {
    page: "max-w-6xl mx-auto px-6 py-10",
    fluid: "",
  };

  const classes = ContainerClasses[variant];
  return <div className={`${classes} ${className}`}>{children}</div>;
};

export default Container;
