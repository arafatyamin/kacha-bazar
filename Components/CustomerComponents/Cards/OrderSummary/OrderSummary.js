import Button from "@/Components/CommonComponents/shared/Button";
import CartItem from "@/Components/CustomerComponents/Cards/CartItem/CartItem";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { toast } from "react-hot-toast";
import { BsArrowUp } from "react-icons/bs";
import { HiShoppingBag } from "react-icons/hi";

const OrderSummary = ({ items, token, sc }) => {
  const couponRef = useRef(null);
  const [discount, setDiscount] = useState(0.0);
  const [coupon, setCoupon] = useState(null);
  const subTotal = items.reduce((total, item) => {
    return (total += item.product.price * item.quantity);
  }, 0);

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

  const validateCoupon = async () => {
    if (!couponRef.current.value) {
      toast.error(`Please enter a coupon code first`);
      return;
    }
    if (discount > 0) {
      toast.error(`You can only use one coupon at a time`);
      return;
    }

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/coupons/validate",
        {
          code: couponRef.current.value,
        },
        {
          headers: {
            authToken: token,
          },
        }
      );
      const coupon = response.data.data;

      if (coupon?.minimumAmount > subTotal) {
        toast.error(
          `This coupon can only be used for purchases totaling $${coupon?.minimumAmount} or more.`
        );
        return;
      }

      setCoupon(coupon);
      sc(coupon);
      toast.success("Coupon applied successfully");
      couponRef.current.value = "";
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message || "Something went wrong");
    }
  };

  useEffect(() => {
    if (coupon && subTotal) {
      console.log(subTotal, coupon?.minimumAmount);
      if (coupon?.minimumAmount > subTotal) {
        toast.error(
          `This coupon can only be used for purchases totaling $${coupon?.minimumAmount} or more.`
        );
        sc(null);
        setCoupon(null);
        setDiscount(0);
      } else {
        const totalDiscount = (coupon?.discountPercentage / 100) * subTotal;
        setDiscount(totalDiscount);
        sc(coupon);
      }
    }
  }, [subTotal, coupon]);

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
              items?.map((item, index) => (
                <CartItem key={index} data={item} index={index} />
              ))
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
            ref={couponRef}
            type="text"
            placeholder="Input your coupon code"
            className="px-3 py-2 border rounded outline-none flex-grow"
          />
          <Button text={"Apply"} onClick={validateCoupon} />
        </div>
        <div className="mt-5 border-b">
          <ul>
            <li className="flex justify-between items-center my-2">
              Subtotal
              <span>
                <b>${subTotal || 0.0}</b>
              </span>
            </li>
            <li className="flex justify-between items-center my-2">
              <div className="flex justify-between items-center">
                Discount{" "}
                {coupon && (
                  <p className="text-gray-700  text-sm pl-2">
                    ({coupon?.campaignCode} applied)
                  </p>
                )}
              </div>

              <span className="text-orange-500">
                <b>${discount.toFixed(2)}</b>
              </span>
            </li>
            <li className="flex justify-between items-center my-2">
              Shipping Cost{" "}
              <span>{subTotal > 500 ? <b>free</b> : <b>$2.00</b>}</span>
            </li>
          </ul>
        </div>
        <div className="mt-3 font-bold">
          <p className="flex justify-between items-center">
            Total Cost{" "}
            <span>
              ${subTotal + (subTotal > 500 ? 0 : 2) - discount.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
