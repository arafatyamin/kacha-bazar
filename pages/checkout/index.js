import OrderSummary from "@/Components/CustomerComponents/Cards/OrderSummary/OrderSummary";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import handleStatus from "@/auth/handleStatus";
import axios from "axios";
import { toast } from "react-hot-toast";
import SyncLoader from "react-spinners/SyncLoader";

const checkout = ({ token }) => {
  const override = {
    textAlign: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: 999999999999,
  };
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState(null);
  const cartItemsArray = useSelector((state) => state.cart.cart);
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (cartItemsArray.length === 0) {
      toast.error("Cart is empty");
      return;
    }
    setLoading(true);
    const { phone, ...rest } = data;
    const address = Object.values(rest).join(",");

    const items = cartItemsArray.map((item) => {
      return {
        id: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      };
    });

    const order = {
      products: items,

      ...(coupon
        ? {
            discount: true,
            coupon,
          }
        : {
            discount: false,
          }),

      shippingCost: 2,
      paymentMethod: "COD",
      phone,
      shippingAddress: address,
    };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/customer/orders",
        order,
        {
          headers: {
            authToken: token,
          },
        }
      );
      dispatch({
        type: "CLEAR_CART",
      });
      toast.success("Order placed successfully");
      router.push("/order/?id=" + response.data.data.id + '&type=new');
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main>
        <section>
          <SyncLoader
            loading={loading}
            color={"#10b981"}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />

          <div className="custom-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="p-2 order-last lg:order-none">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-8">
                    <h3 className="mb-3 font-medium">01. Personal Details</h3>
                    <div>
                      <div className="flex flex-col md:flex-row gap-3 mb-5">
                        <div className="w-full">
                          <label
                            htmlFor="phoneNumber"
                            className="mb-1 inline-block"
                          >
                            Phone Number
                          </label>
                          <br />
                          <input
                            id="phoneNumber"
                            className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                            placeholder="e.g. 123456789"
                            {...register("phone")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="mb-3 font-medium">02. Shipping Details</h3>
                    <div>
                      <div className="w-full mb-3">
                        <label
                          htmlFor="shippingAddress"
                          className="mb-1 inline-block"
                        >
                          Street Address
                        </label>
                        <br />
                        <input
                          id="shippingAddress"
                          className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                          placeholder="123 Boulevard Rd, Beverley Hills"
                          {...register("address")}
                        />
                      </div>
                      <div className="flex flex-col md:flex-row gap-3 mb-5">
                        <div className="w-full">
                          <label htmlFor="city" className="mb-1 inline-block">
                            City
                          </label>
                          <br />
                          <input
                            id="city"
                            className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                            placeholder="Dhaka"
                            {...register("city")}
                          />
                        </div>
                        <div className="w-full">
                          <label htmlFor="zip" className="mb-1 inline-block">
                            ZIP / Postal
                          </label>
                          <br />
                          <input
                            id="zip"
                            className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                            placeholder="2345"
                            {...register("zip")}
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="country"
                            className="mb-1 inline-block"
                          >
                            Country
                          </label>
                          <br />
                          <input
                            id="country"
                            className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                            placeholder="Bangladesh"
                            {...register("country")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <input
                    className="bg-green-600 px-5 py-2 text-white rounded cursor-pointer"
                    type="submit"
                    value={loading ? "Submiting" : "Submit"}
                  />
                </form>
              </div>
              <div className="p-2 order-first lg:order-none">
                <OrderSummary
                  items={cartItemsArray}
                  token={token}
                  sc={setCoupon}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  return await handleStatus(context, "customer");
}

checkout.getLayout = (page) => {
  const loggedIn = page.props.children.props.children[1].props.loggedIn;
  return <CustomerLayout loggedIn={loggedIn}>{page}</CustomerLayout>;
};

export default checkout;
