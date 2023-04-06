import React from "react";

const Button = ({ name }) => {
  return (
    <button className="w-full h-full p-3 lg:p-0 bg-[#0E9F6E] rounded-md text-white hover:bg-[#07895e] duration-300">
      + {name}
    </button>
  );
};

export default Button;
