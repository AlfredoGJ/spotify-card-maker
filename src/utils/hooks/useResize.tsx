import { useContext } from "react";

import { ElementSizeContext } from "../ResizableHOC/Resizable";
const useElementSize = () => {
  const size = useContext(ElementSizeContext);
  if (size === null || size === undefined)
    throw new Error(
      "'useElementSize' hook must be used in components wrapped inside 'Resizable' hiher order component "
    );
  return size;
};

export { useElementSize };
