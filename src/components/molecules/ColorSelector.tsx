import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Color } from "../../types/types";
import useSelect, { SelectItem } from "../../utils/hooks/useSelect";
import { ColorValue } from "../atoms/ColorValue/ColorValue";

interface IColorSelectorProps {
  text: string;
  colors: Array<Color>;
  maxSelect: number;
  defaultSelectedNames: string[];
  onChange: (selected: Color[]) => void;
}

export const ColorSelector = ({
  text,
  colors,
  maxSelect,
  onChange,
  defaultSelectedNames,
}: IColorSelectorProps) => {
  const selectItems = useMemo(() => {
    console.log("Recalculating Items because 'colors' changed")
    return colors.map((c) => ({ value: c.values, id: c.name }));
  }, [colors]);

  const _defaultSelectedNames = useMemo(() => {
    return defaultSelectedNames && defaultSelectedNames.map((i) => i);
  }, [colors]);

  const [items, select, toggle] = useSelect(
    selectItems,
    maxSelect,
    _defaultSelectedNames
  );

  const hasMounted = useRef(false);
  console.log("Rendered component, mounted", hasMounted.current);

  useEffect(() => {
    if (hasMounted.current) {
      onChange &&
        onChange(
          items
            .filter((i) => i.selected)
            .map((c) => ({ name: c.id, values: c.value }))
        );
    }

    hasMounted.current = true;
  }, [items]);

  function getPaletteItems(paletteItems: SelectItem[]) {
    return paletteItems.map((item, i) => (
      <ColorValue
      key={item.id}
        width={38}
        shape={
          i === 0
            ? "roundedLeft"
            : i === paletteItems.length - 1
            ? "roundedRight"
            : "square"
        }
        onClick={() => handleColorSelect(item)}
        color={{ name: item.id.toString(), values: item.value }}
        isSelectable
        selected={item.selected!}
      />
    ));
  }

  const otherColorItems = getPaletteItems(
    items.filter((c) => c.id.toString().length > 1)
  );
  const paletteColorItems = getPaletteItems(
    items.filter((c) => c.id.toString().length === 1)
  );

  function handleColorSelect(color: SelectItem) {
    select(color);
  }

  return (
    <div className="flex flex-col gap-2   rounded-lg mb-2 ">
      <div>
        <div>
          <p className="font-medium mb-2">{text}</p>
          <div className="flex ">{getPaletteItems(items)}</div>
        </div>
      </div>
    </div>
  );
};
