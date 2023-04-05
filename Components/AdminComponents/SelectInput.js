import React from "react";

const SelectInput = ({ items, name }) => {
  return (
    <select name="" id="" className="w-full p-3 rounded-md border bg-gray-100">
      <option value={""} className="hidden">
        {name}
      </option>

      {items?.map((item) => (
        <option key={item._id} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
