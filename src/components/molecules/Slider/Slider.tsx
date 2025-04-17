import { ChangeEvent, HtmlHTMLAttributes, useState } from "react";

interface ISliderProps  {
  initialValue: number;
  name: string;
  min: number;
  max: number;
  unit: string;
  onChange?: (value:number) => void;
} 

const Slider = ({
  initialValue,
  min,
  max,
  name,
  unit,
  onChange,
}: ISliderProps) => {
  const [_value, setValue] = useState(initialValue);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(event.target.value);
    setValue(value);
    onChange && onChange(value);
  }
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span>{`${_value} ${unit}`}</span>
      </div>
      <input
        onChange={handleChange}
        type="range"
        min={min}
        max={max}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
        value={_value}
      />
    </div>
  );
};

export default Slider;
