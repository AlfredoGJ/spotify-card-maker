import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Color } from "../../types/types";
import useSelect, { SelectItem } from "../../utils/hooks/useSelect";
import { ColorName } from "../atoms/ColorValue";

interface IColorSelectorProps {
  text: string;
  colors: Array<Color>;
  maxSelect: number;
  onChange: (selected: SelectItem[]) => void;
}

export const ColorSelector = ({
  text,
  colors,
  maxSelect,
  onChange,
}: IColorSelectorProps) => {
  const selectItems = useMemo(() => {
    return colors.map((c, idx) => ({
      value: c.values,
      index: c.name,
      selected: idx < maxSelect ? true : false,
    }));
  }, [colors, maxSelect]);

  const [items, select, toggle] = useSelect(selectItems);
  const [currentSelection, setCurrentSelection] = useState(0);

  console.log("Rendered component");

  useEffect(() => {
    onChange && onChange(items.filter((i) => i.selected));
  }, [items, onChange]);

  function handleColorSelect(color: SelectItem) {
    console.log("Selected", color);

    if (!color.selected) {
      const currentSelected = items.filter((i) => i.selected);

      toggle(currentSelected[currentSelection]);
      select(color);
      if (currentSelection < maxSelect - 1)
        setCurrentSelection(currentSelection + 1);
      else setCurrentSelection(0);
    }
  }

  return (
    <div className="flex flex-col gap-2 bg-green-100 p-3">
      <p className="text-sm">{text}</p>
      <div className="grid grid-cols-8 gap-1">
        {items.map((item) => (
          <ColorName
            onClick={() => handleColorSelect(item)}
            color={{ name: item.index.toString(), values: item.value }}
            isSelectable
            selected={item.selected!}
          />
        ))}
      </div>
    </div>
  );
};
