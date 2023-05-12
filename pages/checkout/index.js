import OrderSummary from "@/Components/CustomerComponents/Cards/OrderSummary/OrderSummary";
import CustomerLayout from "@/Layouts/CustomerLayout";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const cartItemsArray = useSelector((state) => state.cart.cart);
  console.log(cartItemsArray)
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main>
        <section>
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
                            htmlFor="firstName"
                            className="mb-1 inline-block"
                          >
                            First Name
                          </label>
                          <br />
                          <input
                            id="firstName"
                            placeholder="John"
                            className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                            {...register("firstName")}
                          />
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="lastName"
                            className="mb-1 inline-block"
                          >
                            Last Name
                          </label>
                          <br />
                          <input
                            id="lastName"
                            placeholder="Doe"
                            className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                            {...register("lastName")}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-3 mb-5">
                        <div className="w-full">
                          <label htmlFor="email" className="mb-1 inline-block">
                            Email Address
                          </label>
                          <br />
                          <input
                            id="email"
                            className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                            placeholder="John@gmail.com"
                            {...register("email")}
                          />
                        </div>
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
                            {...register("phoneNumber")}
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
                          Shipping Address
                        </label>
                        <br />
                        <input
                          id="shippingAddress"
                          className="px-3 py-2 w-full outline-none border rounded focus:border-green-600"
                          placeholder="123 Boulevard Rd, Beverley Hills"
                          {...register("shippingAddress")}
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
                      </div>
                    </div>
                  </div>

                  {/* <div className="mb-8">
                    <h3 className="font-medium mb-3">03. Shipping Cost</h3>
                    <div className="flex gap-5">
                      <label htmlFor="fedex" className="flex-1 cursor-pointer">
                        <div className="px-3 py-5 border rounded">
                          <div className="flex justify-between gap-2">
                            <div className="flex gap-3 items-center">
                              <div>
                                <BsTruck size="30" color="#bcbcbc" />
                              </div>
                              <div>
                                <h6>FedEx</h6>
                                <p className="text-sm">
                                  Delivery: Total Cost: $60.00
                                </p>
                              </div>
                            </div>
                            <input
                              id="fedex"
                              type="radio"
                              name="shipments"
                              value="fedex"
                              {...register("fedex", { required: true })}
                            />
                          </div>
                        </div>
                      </label>
                      <label htmlFor="ups" className="flex-1 cursor-pointer">
                        <div className="px-3 py-5 border rounded">
                          <div className="flex justify-between gap-2">
                            <div className="flex gap-3 items-center">
                              <div>
                                <BsTruck size="30" color="#bcbcbc" />
                              </div>
                              <div>
                                <h6>UPS</h6>
                                <p className="text-sm">
                                  Delivery: 7 Days Cost: $20.00
                                </p>
                              </div>
                            </div>
                            <input
                              id="ups"
                              type="radio"
                              name="shipments"
                              value="ups"
                              {...register("ups", { required: true })}
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-medium mb-3">04. Payment Details</h3>
                    <div className="flex gap-5">
                      <label htmlFor="cash" className="flex-1 cursor-pointer">
                        <div className="px-3 py-5 border rounded">
                          <div className="flex justify-between gap-2">
                            <div className="flex gap-3 items-center">
                              <div>
                                <BsTruck size="30" color="#bcbcbc" />
                              </div>
                              <div>
                                <h6>Cash On Delivery</h6>
                              </div>
                            </div>
                            <input
                              id="cash"
                              type="radio"
                              name="cash"
                              value="cash"
                              {...register("cash", { required: true })}
                            />
                          </div>
                        </div>
                      </label>
                      <label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="px-3 py-5 border rounded">
                          <div className="flex justify-between gap-2">
                            <div className="flex gap-3 items-center">
                              <div>
                                <BsTruck size="30" color="#bcbcbc" />
                              </div>
                              <div>
                                <h6>Credit Card</h6>
                              </div>
                            </div>
                            <input
                              id="card"
                              type="radio"
                              name="card"
                              value="card"
                              {...register("card", { required: true })}
                            />
                          </div>
                        </div>
                      </label>
                    </div>
                  </div> */}

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <input
                    className="bg-green-600 px-5 py-2 text-white rounded cursor-pointer"
                    type="submit"
                  />
                </form>
              </div>
              <div className="p-2 order-first lg:order-none">
                <OrderSummary items={cartItemsArray}/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

checkout.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default checkout;
