import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Input = ({
  className,
  name,
  placeholder,
  Icon,
  value,
  changeHandler,
  type,
  ...props
}) => {
  const [passwordOpen, setPasswordOpen] = useState(false);
  return (
    <div
      className={`flex items-center space-x-2 border border-gray p-2 rounded-lg ${className}`}
    >
      {Icon && <Icon className="text-primary sm:text-xl" />}
      <input
        className="outline-none flex-grow bg-inherit px-2 py-1 rounded-md"
        name={name}
        placeholder={placeholder}
        type={type === "password" ? (passwordOpen ? "text" : "password") : type}
        value={value}
        onChange={changeHandler}
        {...props}
      />
      {type === "password" && (
        <div
          className="text-primary sm:text-xl cursor-pointer"
          onClick={() => setPasswordOpen(!passwordOpen)}
        >
          {passwordOpen ? <BsEyeSlashFill /> : <BsEyeFill />}
        </div>
      )}
    </div>
  );
};

export default Input;
