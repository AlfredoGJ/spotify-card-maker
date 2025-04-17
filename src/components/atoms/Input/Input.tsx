import { Search } from "lucide-react";

import React, { ChangeEvent } from "react";

interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Input = ({ value, onChange }: InputProps) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    onChange && onChange(e.target.value);
  }
  return (
    <div className="relative flex-grow">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
        <Search size={18} />
      </div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Paste Spotify URI (e.g., spotify:track:4iV5W9uYEdYUVa79Axb7Rh) or search by title"
        className="w-full py-3 pl-10 pr-3 border border-slate-200 rounded-lg"
      />
    </div>
  );
};

export default Input;
