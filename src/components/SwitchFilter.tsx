import React from "react";
import categories from "./categories";

interface Props {
  onSelect: (category: string) => void;
}

const SwitchFilter = ({ onSelect }: Props) => {
  return (
    <div className="px-40">
      <label htmlFor="selectCategory">Select Category</label>
      <select
        id="selectCategory"
        className="border p-1 w-full mb-3"
        onChange={(event) => onSelect(event.target.value)}
        name=""
      >
        <option className="text-sm">Select Category</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default SwitchFilter;
