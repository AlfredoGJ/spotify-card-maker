const ColorValueClasses = {
  default: "bg-green-400 rounded-md  text-white",
  shape: {
    square: "aspect-square",
    rounded: "aspect-square rounded-lg",
    circle: "aspect-square rounded-full",
    roundedRight: "aspect-square rounded-r-lg",
    roundedLeft: "aspect-square rounded-l-lg",
  },
  selected: "ring-2 ring-green-400 z-10",
  selectable: "ring-gray-600 cursor-pointer",
  hover: "scale-105 ring-green-600",
};

export default ColorValueClasses;
