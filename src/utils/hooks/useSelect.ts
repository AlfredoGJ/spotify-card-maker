import { useCallback, useEffect, useState } from "react";

type SelectItem = {
  index: string | number;
  value: any;
  selected?: boolean;
};

function useSelect(items: SelectItem[]) {
  const [itemsArray, setItemsArray] = useState<SelectItem[]>([]);
  const [itemsDictionary, setItemsDictionary] = useState<
    Record<string | number, any>
  >({});

  useEffect(() => {
    let auxArray = []
    let auxDictionary:Record<string|number,any> = {}
    for (let i = 0; i < items.length; i++) {
      auxArray.push({ ...items[i] });
      auxDictionary[items[i].index.toString()] =  i;

      setItemsArray([...auxArray])
      setItemsDictionary({...auxDictionary})
    }
    console.log("items changed:", items);
  }, [items]);


  const select = useCallback(
    (item: SelectItem) => {
      let arrayIndex = itemsDictionary[item.index] 
      if (!itemsArray[arrayIndex].selected) {
        itemsArray[arrayIndex].selected = true
        setItemsArray([...itemsArray])
      }
    },
    [itemsArray, itemsDictionary]
  );

  const toggle = useCallback(
    (item: SelectItem) => {
      let arrayIndex = itemsDictionary[item.index]
      if (!itemsArray[arrayIndex].selected) {
        itemsArray[arrayIndex].selected = true
        setItemsArray([...itemsArray])
      } else {
        itemsArray[arrayIndex].selected = false
        setItemsArray([...itemsArray])
      }
    },
    [itemsArray, itemsDictionary]
  );



  return [itemsArray, select, toggle] as [
    SelectItem[],
    (item: SelectItem) => void,
    (item: SelectItem) => void
  ];
}

export type { SelectItem };
export default useSelect;
