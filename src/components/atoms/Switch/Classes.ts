const SwitchClasses = {
  default: {
    Root: "flex items-center transition-all rounded-full ease-out duration-400 ",
    Tip: "rounded-full transition-all ease-out duration-200",
  },

  enabled: {
    Root: "cursor-pointer",
    Tip: "cursor-none",
  },
  disabled: { Root: "", Tip: "" },
  checked: { Root: "bg-emerald-500", Tip: "bg-gray-100 ml-6" },
  notChecked: {
    Root: "bg-gray-400",
    Tip: "bg-gray-100",
  },
  size: {
    small: { Root: "", Tip: "" },
    medium: { Root: "w-12 h-6 p-[2px]", Tip: "w-5 h-5" },
    big: { Root: "", Tip: "" },
  },
};

export default SwitchClasses;
