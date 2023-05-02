import Counter from "@/Components/CommonComponents/Counter";
import Button from "@/Components/CommonComponents/shared/Button";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { Carousel } from "@trendyol-js/react-carousel";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { BsFacebook, BsLinkedin, BsPinterest, BsShieldSlash, BsTruck, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FiDollarSign, FiSun } from "react-icons/fi";
import { GrSync } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const SingleProduct = () => {
  const [stock, setStock] = useState(true);
  const router = useRouter();
  const { productId } = router.query;
  const [isDescCollapsed, setIsDescCollapsed] = useState(true)
  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>
      <section>
        <div className="custom-container">
          <ul className="flex items-center gap-2 py-4">
            <li>Home</li>
            <MdKeyboardArrowRight />
            <li>Fresh-vegetable</li>
            <MdKeyboardArrowRight />

            <li>Rainbow Chard</li>
          </ul>
        </div>
        <div className="custom-container bg-white xl:flex p-4 rounded-md my-8">
          {/* <==== Image portion Start ====>  */}
          <div className="xl:w-1/3">
            <div className="w-fit mx-auto">
              <Image
                src={"/images/home/Orange-Bell-Pepper-22ct.webp"}
                height={400}
                width={400}
              />
            </div>
            <div>
              <Carousel slide={1} show={1} transition={0.5}>
                <div className="h-48 w-48 bg-red-400 p-4 m-3 border-2 border-gray-200 rounded-2xl">
                  hello
                </div>
                
              </Carousel>
            </div>
          </div>
          {/* <==== Image portion end ====>  */}
          {/* <==== Description portion Start  ====>  */}
          <div className="md:flex xl:w-2/3 ">
            {/* product description start  */}
            <div className="p-2">
              <h2 className="mb-1 font-semibold">Clementine</h2>
              <p className="mb-1 text-gray-primary">SKU: {productId}</p>
              {stock ? (
                <div className="bg-primary-light w-fit text-sm px-2 py-1 rounded-full font-bold mb-6">
                  <span className="text-primary">Stock:</span>{" "}
                  <span className="text-red">472</span>
                </div>
              ) : (
                <span className="mb-3 text-sm bg-red-200 inline-block px-3 py-1 rounded-full text-gray-primary">
                  Out Of Stock
                </span>
              )}

              <h2 className="font-bold mb-4">$13</h2>

              <p
                className={`text-gray-500 mb-2 ${
                  isDescCollapsed && "line-clamp-2"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                iste qui, necessitatibus aliquam quae quo nobis corporis at
                labore omnis? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Nostrum, voluptatem!
              </p>
              <div className="text-sm text-orange-500 cursor-pointer text-end px-8">
                {isDescCollapsed ? (
                  <p onClick={() => setIsDescCollapsed(!isDescCollapsed)}>
                    More info
                  </p>
                ) : (
                  <p onClick={() => setIsDescCollapsed(!isDescCollapsed)}>
                    Show less
                  </p>
                )}
              </div>
              <div className="flex gap-4">
                <Counter value={"1"} />
                <Button text="Add to Cart" className={"px-12 py-2"} />
              </div>
              <div className="font-medium mt-4">
                Category:{" "}
                <span className="text-gray-primary underline">
                  fresh-vegetable
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-primary p-4 font-medium">
                <p>fresh fruits</p>
                <p>fruits</p>
                <p>vegetable</p>
              </div>

              {/* social Network  */}
              <div className="my-6 space-y-4">
                <div>
                  <p className="font-semibold">Share in your social network</p>
                  <p className="text-gray-primary text-sm">
                    For get lots of traffic from social network share this
                    product
                  </p>
                </div>
                <ul className="text-sm flex">
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="social-link-Facebook"
                      className="block text-center mx-auto text-[#3b5998] hover:bg-white"
                    >
                      <BsFacebook className="w-8 h-6" />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="social-link-twitter"
                      className="block text-center mx-auto text-[#00aced] hover:bg-white"
                    >
                      <BsTwitter className="w-8 h-6" />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="social-link-pinterest"
                      className="block text-center mx-auto text-[#cb2128] hover:bg-white"
                    >
                      <BsPinterest className="w-8 h-6" />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="social-link-Linkedin"
                      className="block text-center mx-auto text-[#007fb1] hover:bg-white"
                    >
                      <BsLinkedin className="w-8 h-6" />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="social-link-whatsapp"
                      className="block text-center mx-auto text-[#25d366] hover:bg-white"
                    >
                      <BsWhatsapp className="w-8 h-6" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* product description end */}

            {/* terms section  start */}
            <div className="p-4 text-gray-primary text-sm bg-gray-50 rounded-md h-fit">
              <ul>
                <li className="py-2 flex gap-2 items-center">
                  <span>
                    <BsTruck size={20} />
                  </span>
                  <p>Free shipping apply to all orders over shipping $100</p>
                </li>
                <li className="py-2 flex gap-2 items-center">
                  <span>
                    <BiHomeAlt size={20} />
                  </span>
                  <p>Home Delivery within 1 Hour</p>
                </li>
                <li className="py-2 flex gap-2 items-center">
                  <span>
                    <FiDollarSign size={20} />
                  </span>
                  <p>Cash on Delivery Available</p>
                </li>
                <li className="py-2 flex gap-2 items-center">
                  <span>
                    <GrSync size={20} />
                  </span>
                  <p>7 Days returns money back guarantee</p>
                </li>
                <li className="py-2 flex gap-2 items-center">
                  <span>
                    <BsShieldSlash size={20} />
                  </span>
                  <p>Warranty not available this item</p>
                </li>
                <li className="py-2 flex gap-2 items-center">
                  <span>
                    <FiSun size={20} />
                  </span>
                  <p>Guaranteed 100% organic from natural products.</p>
                </li>
                <li className="py-2 flex gap-2 items-center">
                  <span>
                    <IoLocationOutline size={20} />
                  </span>
                  <p>
                    Delivery from our pick point Cecilia Chapman, 561-4535 Nulla
                    LA, United States 96522
                  </p>
                </li>
              </ul>
            </div>
            {/* terms section  start */}
          </div>
          {/* <==== Description portion end ====>  */}
        </div>
      </section>
    </>
  );
};

SingleProduct.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default SingleProduct;
