import React, { ChangeEvent, useState } from "react";

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

const Input = ({
  value,
  onChange,
  placeholder,
  leftSlot,
  rightSlot,
}: InputProps) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange && onChange(e.target.value);
  }

  const [focus, setFocus] = useState(false);

  const focusClasses = focus ? "ring ring-slate-300 " : "";

  return (
    <div
      className={`flex w-full h-11 border border-slate-200 rounded-lg ${focusClasses}`}
    >
      {leftSlot && <div className="flex self-center">{leftSlot}</div>}
      <input
        value={value}
        onFocus={(e) => setFocus(true)}
        onBlur={(e) => setFocus(false)}
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
        className={`my-input-reset w-full px-2 border-none outline-none`}
      />
      {rightSlot && <div className="flex self-center">{rightSlot}</div>}
    </div>
  );
};

export default Input;
