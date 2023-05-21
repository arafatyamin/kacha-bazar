import Button from "@/Components/CommonComponents/shared/Button";
import CartItem from "@/Components/CustomerComponents/Cards/CartItem/CartItem";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";

const OrderSummary = ({ items }) => {
  const orderTotal = items?.reduce((acc, curr) => {
    if (acc.subtotal) {
      acc.subtotal += Number(curr.count) * Number(curr.price);
      acc.totalItems += Number(curr.count);
      acc.discount += Number(curr.discount);
    } else {
      acc.subtotal = Number(curr.count) * Number(curr.price);
      acc.totalItems = Number(curr.count);
      acc.discount = Number(curr.discount);
    }

    return acc;
  }, {});

  const [isVisible, setIsVisible] = useState(false);
  const scrollToFunc = () => {
    document.querySelector("#cart").scrollTo({ top: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let scrollToShow = 20;
    let sectionScrolled = document.querySelector("#cart").scrollTop;
    if (sectionScrolled >= scrollToShow) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    document.querySelector("#cart").addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div className="border rounded-md p-8 bg-white">
      <h3 className="font-medium mb-3">Shopping Cart</h3>
      <div>
        <div className="relative">
          <div
            className={`${
              items.length > 0 ? "h-96" : "h-32"
            } bg-gray-50 rounded-md overflow-auto space-y-1 relative`}
            id="cart"
          >
            {items.length > 0 ? (
              items?.map((item, index) => <CartItem key={index} data={item} />)
            ) : (
              <div className="flex flex-col justify-center h-full items-center text-gray-primary">
                <HiShoppingBag className="text-5xl " />
                <p>No Item Added Yet!</p>
              </div>
            )}
          </div>
          <div className="absolute hidden sm:inline bottom-2 left-[50%]">
            {isVisible && (
              <BsArrowUp
                className="mx-auto bg-primary-light p-2 w-8 h-8 rounded-full text-primary"
                onClick={scrollToFunc}
              />
            )}
          </div>
        </div>

        <div className="flex gap-3 justify-between items-center mt-4">
          <input
            type="text"
            placeholder="Input your coupon code"
            className="px-3 py-2 border rounded outline-none flex-grow"
          />
          <Button text={"Apply"} />
        </div>
        <div className="mt-5 border-b">
          <ul>
            <li className="flex justify-between items-center my-2">
              Subtotal
              <span>
                <b>${orderTotal.subtotal || 0.0}</b>
              </span>
            </li>
            <li className="flex justify-between items-center my-2">
              Shipping Cost{" "}
              <span>
                <b>$0.00</b>
              </span>
            </li>
            <li className="flex justify-between items-center my-2">
              Discount{" "}
              <span className="text-orange-500">
                <b>${orderTotal.discount || 0.0}</b>
              </span>
            </li>
          </ul>
        </div>
        <div className="mt-3 font-bold">
          <p className="flex justify-between items-center">
            Total Cost <span>$0.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
