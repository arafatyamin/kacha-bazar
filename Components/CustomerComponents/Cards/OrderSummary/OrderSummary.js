import Button from "@/Components/CommonComponents/shared/Button";
import { cartData } from "@/data/cartData";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import CartItem from "@/Components/CustomerComponents/Cards/CartItem/CartItem";
import { useEffect, useState } from "react";

const OrderSummary = () => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollToFunc = () => {
    document.querySelector("#cart").scrollTo({top:0, behavior:"smooth"})
  }
  const listenToScroll =() => {
    let scrollToShow = 20;
    let sectionScrolled = document.querySelector("#cart").scrollTop
    if (sectionScrolled >= scrollToShow) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  useEffect(() => {
    document.querySelector("#cart").addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div className="border rounded p-3">
      <h3 className="font-medium mb-3">Order Summary</h3>
      <div>
        <div className="relative">
          <div
            className="h-96 bg-white rounded-md overflow-auto space-y-1 relative"
            id="cart"
          >
            {cartData?.map((item, index) => (
              <CartItem key={index} data={item} />
            ))}
          </div>
          <div className="absolute bottom-2 left-[50%]">
            {isVisible && (
              <BsArrowUp className="mx-auto bg-primary-light p-2 w-8 h-8 rounded-full text-primary" onClick={scrollToFunc}/>
            )}
          </div>
        </div>

        <div className="flex gap-3 justify-between items-center mt-4">
          <input
            type="text"
            placeholder="Input your coupon code"
            className="px-1 py-2 border rounded outline-none"
          />
          <Button text={"Apply"} />
        </div>
        <div className="mt-5 border-b">
          <ul>
            <li className="flex justify-between items-center my-2">
              Subtotal{" "}
              <span>
                <b>$0.00</b>
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
                <b>$0.00</b>
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
