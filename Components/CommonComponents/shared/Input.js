import { useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Input = ({ label, id, className, placeholder, Icon, type, ...props }) => {
  const [passwordOpen, setPasswordOpen] = useState(false);
  return (
    <div>
      {label && (
        <label htmlFor={id} className="font-semibold text-gray-primary">
          {label}
        </label>
      )}
      <div
        className={`flex items-center gap-2 border border-gray  rounded-lg px-2 py-1 ${className}`}
      >
        {Icon && (
          <Icon className="text-primary sm:text-xl hidden md:inline-block" />
        )}
        <input
          autoComplete="false"
          className="outline-none flex-1 px-2 h-8 rounded-md"
          id={id}
          placeholder={placeholder || ''}
          type={
            type === "password" ? (passwordOpen ? "text" : "password") : type
          }
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
