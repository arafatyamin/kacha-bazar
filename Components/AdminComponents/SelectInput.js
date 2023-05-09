import React from "react";

const SelectInput = ({ items, name }) => {
  return (
    <select
      name="category"
      id=""
      className="w-full p-3 rounded-md border bg-gray-100 active:bg-white"
    >
      <option value={""} className="hidden">
        {name}
      </option>

      {items?.map((item, i) => (
        <option key={i} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
