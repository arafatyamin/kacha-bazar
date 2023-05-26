import { forwardRef, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

const Input = forwardRef(({ label, id, className, placeholder, Icon, type, ...props },ref) => {
  const [passwordOpen, setPasswordOpen] = useState(false);
  return (
    <div>
      {label && (
        <label htmlFor={id} className="font-semibold text-gray-primary">
          {label}
        </label>
      )}
      <div
        className={`flex items-center gap-1 md:gap-2 border border-gray  rounded-lg px-2 py-1 ${className}`}
      >
        {Icon && (
          <Icon className="text-primary sm:text-xl hidden md:inline-block" />
        )}
        <input
          autoComplete="false"
          className="outline-none flex-1 px-2 h-8 rounded-md min-w-[80%]"
          id={id}
          placeholder={placeholder}
          type={
            type === "password" ? (passwordOpen ? "text" : "password") : type
          }
          ref={ref}
          {...props}
        />
        {type === "password" && (
          <div
            className="text-primary sm:text-xl cursor-pointer flex-shrink-0"
            onClick={() => setPasswordOpen(!passwordOpen)}
          >
            {passwordOpen ? <BsEyeSlashFill /> : <BsEyeFill />}
          </div>
        )}
      </div>
    </div>
  );
})

export default Input;
