const FormInput = ({ title, number, name, placeholder }) => {
  return (
    <>
      <p className="py-2">{title || "Title"}</p>
      <div className="col-span-2 ">
        <input
          required
          className="w-full p-3 focus:outline-none rounded-md border bg-gray-100"
          type={number ? "number" : "text"}
          name={name || title?.toLowerCase() || "name"}
          placeholder={placeholder || title || "placeholder"}
        />
      </div>
    </>
  );
};

export default FormInput;
