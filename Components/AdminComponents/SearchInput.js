import React from "react";

const SearchInput = ({ placeholder }) => {
  return (
    <input
      className="w-full p-3 rounded-md border bg-gray-100"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
