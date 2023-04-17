import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

const DropDown = ({ itemList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  return (
    <div className="p-6 space-y-2">
      {itemList?.map((item) => (
        <div
          key={item.id}
          className="hover:bg-gray-100 hover:text-primary rounded cursor-pointer duration-200"
          onClick={() => {
            if (!id) {
              setIsOpen(!isOpen);
              setId(item.id);
            } else if (id !== item.id && isOpen) {
              setId(item.id);
            } else if (id == item.id) {
              setIsOpen(!isOpen);
            } else {
              setId(item.id);
              setIsOpen(!isOpen);
            }
          }}
        >
          <div
            className={`flex gap-4 items-center justify-between p-2 overflow-hidden rounded-t-md ${
              id == item?.id && isOpen && "bg-primary-light"
            }`}
          >
            <div className="flex gap-4 items-center ">
              <Image src={item?.imgUrl} height={20} width={20} />
              <p>{item?.title}</p>
            </div>
            <AiOutlineRight className="items-end text-gray-primary" />
          </div>
          {id == item?.id && isOpen && (
            <ul className="text-gray-primary">
              {item.subTitleOne && (
                <div className="gap-2 items-center ml-8 mt-3 flex transition-all duration-300">
                  <Link href="#">
                    <p className="hover:text-primary duration-150">
                      - {item?.subTitleOne}
                    </p>
                  </Link>
                </div>
              )}
              {item.subTitleTwo && (
                <div className="gap-2 items-center ml-8 mt-3 flex transition-all duration-300">
                  <Link href="#">
                    <p className="hover:text-primary duration-150">
                      - {item?.subTitleTwo}
                    </p>
                  </Link>
                </div>
              )}
              {item.subTitleThree && (
                <div className="gap-2 items-center ml-8 mt-3 flex transition-all duration-300">
                  <Link href="#">
                    <p className="hover:text-primary duration-150">
                      - {item?.subTitleThree}
                    </p>
                  </Link>
                </div>
              )}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown