import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Input = ({
  label,
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
    <div className="mb-4">
      <label htmlFor={name} className="font-semibold text-gray-primary">{label}</label>
      <div
        className={`flex items-center gap-2 border border-gray  rounded-lg px-2 py-1 ${className}`}
      >
        {Icon && <Icon className="text-primary sm:text-xl hidden md:inline-block" />}
        <input
        autoComplete="false"
          className="outline-none flex-1 px-2 h-8 rounded-md"
          id={name}
          name={name}
          placeholder={placeholder}
          type={
            type === "password" ? (passwordOpen ? "text" : "password") : type
          }
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
    </div>
  );
};

export default Input;
