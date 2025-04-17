import React, {
  createContext,
  useState,
  Children,
  useRef,
  useEffect,
  useContext,
} from "react";
// A simple object with the shape {width:number, height: number}
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
    setElementSize({ width, height });
  }

  let elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const observer = new ResizeObserver(handleElementResize);
      observer.observe(elementRef.current!);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  function findChild(
    root: React.ReactElement,
    id: string,
    ref: React.MutableRefObject<null>
  ): React.ReactElement<any> {
    if (root.props.id && root.props.id === id)
      return React.cloneElement(root, {
        ref,
      });
    else return findChild(root.props.children, id, ref);
  }

  return (
    <ElementSizeContext.Provider value={elementSize}>
      {Children.map(children, (child) => {
        return findChild(
          child as React.ReactElement,
          "resizable-target",
          elementRef
        );
      })}
    </ElementSizeContext.Provider>
  );
}

const useElementSize = () => {
  const size = useContext(ElementSizeContext);
  if (size === null || size === undefined)
    throw new Error(
      "'useElementSize' hook must be used in components wrapped inside 'ElementSizeContextProvider' component "
    );
  return size;
};

export { ElementSizeContextProvider, useElementSize as useResize };
