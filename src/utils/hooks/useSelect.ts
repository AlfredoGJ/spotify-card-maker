import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type SelectItem = {
  id: string;
  value: any;
  selected?: boolean;
};

const selectionError = new Error(
  "useSelect hook: The element to select or toggle must be in the items collection "
);
function useSelect(
  items: SelectItem[],
  maxSelected?: number,
  defaultSelected?: Array<string>
) {
  const [itemsArray, setItemsArray] = useState<SelectItem[]>([]);
  const [indexDictionary, setIndexDictionary] = useState<
    Record<string, number>
  >({});
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const _maxSelected = maxSelected || items.length;


  const initHookRef = useRef(false);
  const initHook = () => {
    let _itemsArray = [];
    let _indexDictionary: Record<string, number> = {};
    let _selected: Set<string> = new Set();

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.selected = false;
      if (defaultSelected && defaultSelected.includes(item.id)) {
        console.log("Item, to add: ", item);
        if (_selected.size < _maxSelected) {
          console.log("Here, Item added", item);
          _selected.add(item.id);
          item.selected = true;
        }
      }
      _itemsArray.push({ ...item });
      _indexDictionary[item.id.toString()] = i;
    }
    setItemsArray([..._itemsArray]);
    setIndexDictionary({ ..._indexDictionary });
    setSelected(new Set(_selected.values()));
    console.log("items changed:", items);
    console.log("Selected:", _selected);

    initHookRef.current = true;
  };

  useEffect(initHook, [items, defaultSelected, _maxSelected]);

  const select = useCallback(
    (item: SelectItem) => {
      let arrayIndex = indexDictionary[item.id];

      if (arrayIndex === undefined) throw selectionError;
      console.log("Selected Set:", selected)
      if (!selected.has(item.id)) {
        if (selected.size < _maxSelected) {
          itemsArray[arrayIndex].selected = true;
          selected.add(item.id);
        } // Swaping when maxSelected is reached
        else {
          let firstSelectedId = selected.keys().next().value;
          let firstSelectedArrayIndex = indexDictionary[firstSelectedId!];
          // De select first selected item
          selected.delete(firstSelectedId!);
          itemsArray[firstSelectedArrayIndex!].selected = false;
          // Select current item
          selected.add(item.id);
          itemsArray[arrayIndex].selected = true;
        }

        setItemsArray([...itemsArray]);
        setSelected(new Set(selected));
      }
    },
    [itemsArray, indexDictionary, _maxSelected, selected]
  );

  const toggle = useCallback(
    (item: SelectItem) => {
      let arrayIndex = indexDictionary[item.id];

      if (arrayIndex === undefined) throw selectionError;

      console.log("Selected", selected);
      if (selected.has(item.id)) {
        selected.delete(item.id);
        itemsArray[arrayIndex].selected = false;
      } else {
        if (selected.size < _maxSelected) {
          console.log("Selected: ", selected);
          selected.add(item.id);
          itemsArray[arrayIndex].selected = true;
        } else {
          let firstSelectedId = selected.keys().next().value;
          console.log("FirstSelectedId: ", firstSelectedId);
          let firstSelectedArrayIndex = indexDictionary[firstSelectedId!];
          // De select first selected item
          selected.delete(firstSelectedId!);
          itemsArray[firstSelectedArrayIndex!].selected = false;
          // Select current item
          selected.add(item.id);
          itemsArray[arrayIndex].selected = true;
        }
      }
      setSelected(new Set(selected.values()));
      setItemsArray([...itemsArray]);
    },
    [itemsArray, indexDictionary, _maxSelected, selected]
  );

  return [itemsArray, select, toggle] as [
    SelectItem[],
    (item: SelectItem) => void,
    (item: SelectItem) => void
  ];
}

export type { SelectItem };
export default useSelect;
