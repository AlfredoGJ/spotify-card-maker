const ButtonClasses = {
  default: "transition-colors",
  disabled: 'pointer-events-none',
  size: {
    small: "p-0 text-xs",
    medium: "px-4 text-md font-medium",
    large: "p-3 text-md",
  },
  hover: "bg-emerald-600",
  focus: "ring ring-green-300",
  variant: {
    primary: "bg-emerald-500 text-white border border-green-400",
    text: "bg-white text-green-400 border border-green-400",
  },
  shape: {
    default: "",
    rounded: "rounded-md",
    roundedLeft: "rounded-l-md",
    roundedRight: "rounded-r-md",
  },
};

export default ButtonClasses;
