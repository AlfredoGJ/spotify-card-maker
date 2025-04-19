const ButtonClasses = {
  default: "transition-colors justify-center",
  disabled: 'pointer-events-none',
  size: {
    xsmall:"text-sm",
    small: "px-1 py-1 text-md",
    medium: "px-4 py-2 text-md font-medium",
    large: "p-3 text-md",
  },
  hover: "bg-emerald-600",
  focus: "ring ring-green-300",
  variant: {
    primary: "bg-emerald-500 text-white border border-green-400",
    text: "bg-slate-100 text-slate-400 border border-slate-400",
  },
  shape: {
    default: "",
    rounded: "rounded-md",
    roundedLeft: "rounded-l-md",
    roundedRight: "rounded-r-md",
    circle:"rounded-full"
  },
};

export default ButtonClasses;
