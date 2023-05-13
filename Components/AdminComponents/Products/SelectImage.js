import { useRef, useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const SelectImage = ({ images, setImages }) => {
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    setPreviews([...previews, ...images]);
  }, []);

  const handleChange = (e) => {
    const newImage = e.target.files[0];
    if (newImage) {
      setImages([...images, newImage]);

      const reader = new FileReader();

      reader.onload = () => {
        setPreviews([...previews, reader.result]);
      };
      reader.readAsDataURL(newImage);
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages([...newImages]);

    const newPreviews = [...previews];
    newPreviews.splice(index, 1);
    setPreviews([...newPreviews]);
  };

  const iconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "white",
    borderRadius: "50%",
    fontSize: "20px",
    padding: "4px",
    cursor: "pointer",
  };

  return (
    <>
      <fieldset className="w-full space-y-1 text-gray-100">
        <div className="flex">
          <input
            type="file"
            accept="image/*"
            className="px-8 py-12 w-full border-2 border-dashed rounded-md border-gray-300 text-gray-400 "
            onChange={handleChange}
          />
        </div>
      </fieldset>
      <div className="flex gap-1">
        {previews?.map((preview, i) => (
          <div
            className="border  h-[100px] my-2 p-2 rounded-md w-[100px] flex items-center justify-center relative"
            key={i}
          >
            <FaTimes style={iconStyle} onClick={() => removeImage(i)} />
            <img src={preview} alt="product image" />
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectImage;
