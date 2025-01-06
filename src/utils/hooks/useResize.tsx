import React, {
  createContext,
  useState,
  Children,
  useRef,
  useEffect,
  useContext,
} from "react";
import { ElementSize } from "../../types/types";

interface ElementSizeContextProviderProps
  extends React.HtmlHTMLAttributes<HTMLElement> {}

const ElementSizeContext = createContext<ElementSize>({ width: 0, height: 0 });

function ElementSizeContextProvider({
  children,
}: ElementSizeContextProviderProps) {
  const [elementSize, setElementSize] = useState<ElementSize>({
    width: 0,
    height: 0,
  });

  function handleElementResize(entries: Array<ResizeObserverEntry>) {
    const height = entries[0].borderBoxSize[0].blockSize;
    const width = entries[0].borderBoxSize[0].inlineSize;
    console.log(`Element resized -> width: ${width}, height: ${height}  `);
    setElementSize({ width, height });
  }

  let elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      console.log(elementRef);
      const observer = new ResizeObserver(handleElementResize);
      observer.observe(elementRef.current!);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <ElementSizeContext.Provider value={elementSize}>
      {Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          ref: elementRef,
        })
      )}
    </ElementSizeContext.Provider>
  );
}

const useResize = () => {
  const size = useContext(ElementSizeContext);

  return size;
};

export { ElementSizeContextProvider, useResize };
