import React, { FC, useRef, createContext, useState, useEffect } from "react";
import { ElementSize } from "../../types/types";

interface ResizableHOCProps extends React.HtmlHTMLAttributes<HTMLElement> {}

export const ElementSizeContext = createContext<ElementSize>({ width: 0, height: 0 });

const Resizable: FC<ResizableHOCProps> = ({ children }: ResizableHOCProps) => {
  const elementRef = useRef(null);
  const [elementSize, setElementSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (elementRef.current) {
      const observer = new ResizeObserver(handleElementResize);
      observer.observe(elementRef.current!);
      console.log("Element Attached");

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  function handleElementResize(entries: Array<ResizeObserverEntry>) {
    const height = entries[0].borderBoxSize[0].blockSize;
    const width = entries[0].borderBoxSize[0].inlineSize;
    setElementSize({ width, height });
  }

  return (
    <ElementSizeContext.Provider value={elementSize}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          ...(child as React.ReactElement).props,
          ref: elementRef,
        })
      )}
    </ElementSizeContext.Provider>
  );
};

export default Resizable;
