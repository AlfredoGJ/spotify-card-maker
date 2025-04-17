import { Search } from "lucide-react";

import React, { ChangeEvent } from "react";

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  leftIcon?: React.ReactNode;
}

const Input = ({ value, onChange, placeholder, leftIcon }: InputProps) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange && onChange(e.target.value);
  }
  const inputClasses = leftIcon? 'pl-10' :'pl-4'
  return (


    <div className="relative flex-grow">
      {leftIcon && (
        <div className="absolute top-1/2 transform -translate-y-1/2 translate-x-2/3 text-slate-400">
          {leftIcon}
        </div>
      )}
      <input
        onChange={handleChange}
        type="text"
        placeholder={placeholder}
        className={`w-full py-3  pr-4 border border-slate-200 rounded-lg ${inputClasses}`}
      />
    </div>
  );
};

export default Input;
