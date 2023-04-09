const Button = ({
  Icon,
  text,
  varientColor,
  size,
  fill,
  className, ...props
}) => {
  return (
    <button
      className={`cursor-pointer border ${Icon && "flex items-center gap-2"} ${
        varientColor == "primary"
          ? "border-[var(--clr-primary)] text-primary"
          : varientColor == "delete"
          ? "border-[var(--clr-red)] text-red"
          : ""
      } ${
        size == "sm" ? "text-sm" : size == "lg" ? "text-lg" : ""
      } rounded-lg font-semibold lg:px-3 lg:py-2 ${fill? "bg-primary text-white":"text-primary"} ${className} hover:bg-primary-hover duration-200`}
      {...props}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
