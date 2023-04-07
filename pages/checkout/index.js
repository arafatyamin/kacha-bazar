import Head from "next/head";
import { useForm } from "react-hook-form";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { BsTruck } from "react-icons/bs";

const checkout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main>
        <section>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2">
              <div className="p-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-8">
                    <h3 className="mb-3 font-medium">01. Personal Details</h3>
                    <div>
                      <div className="flex gap-2 mb-5">
                        <div className="w-full">
                          <label htmlFor="firstName">First Name</label>
                          <br />
                          <input
                            id="firstName"
                            placeholder="John"
                            {...register("firstName")}
                          />
                        </div>
                        <div className="w-full">
                          <label htmlFor="lastName">Last Name</label>
                          <br />
                          <input
                            id="lastName"
                            placeholder="Doe"
                            {...register("example")}
                          />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="w-full">
                          <label htmlFor="email">Email Address</label>
                          <br />
                          <input
                            id="email"
                            placeholder="John@gmail.com"
                            {...register("email")}
                          />
                        </div>
                        <div className="w-full">
                          <label htmlFor="phoneNumber">Phone Number</label>
                          <br />
                          <input
                            id="phoneNumber"
                            placeholder="e.g. 123456789"
                            {...register("phoneNumber")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Shipping Details */}
                  <div className="mb-8">
                    <h3 className="mb-3 font-medium">02. Shipping Details</h3>
                    <div>
                      <div className="w-full mb-3">
                        <label htmlFor="shippingAddress">
                          Shipping Address
                        </label>
                        <br />
                        <input
                          id="shippingAddress"
                          placeholder="123 Boulevard Rd, Beverley Hills"
                          {...register("shippingAddress")}
                        />
                      </div>
                      <div className="flex gap-2 mb-5">
                        <div className="w-full">
                          <label htmlFor="city">City</label>
                          <br />
                          <input
                            id="city"
                            placeholder="Dhaka"
                            {...register("city")}
                          />
                        </div>
                        <div className="w-full">
                          <label htmlFor="country">Country</label>
                          <br />
                          <input
                            id="country"
                            placeholder="Bangladesh"
                            {...register("country")}
                          />
                        </div>
                        <div className="w-full">
                          <label htmlFor="zip">ZIP / Postal</label>
                          <br />
                          <input
                            id="zip"
                            placeholder="2345"
                            {...register("zip")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-medium mb-3">03. Shipping Cost</h3>
                    <div className="flex gap-5">
                      <div className="flex-1 px-3 py-5 border rounded">
                        <label htmlFor="fedex">
                          <div className="flex justify-between gap-2">
                            <div className="flex gap-2 items-center">
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
                        </label>
                      </div>
                      <div className="flex-1 px-3 py-5 border rounded">
                        <label htmlFor="ups">
                          <div className="flex justify-between gap-2">
                            <div className="flex gap-2 items-center">
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
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* include validation with required or other standard HTML validation rules */}
                  <input {...register("exampleRequired", { required: true })} />
                  {/* errors will return when field validation fails  */}
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <input type="submit" />
                </form>
              </div>
              <div className="p-2">2</div>
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
