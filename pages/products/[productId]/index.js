import Counter from "@/Components/CommonComponents/Counter";
import Button from "@/Components/CommonComponents/shared/Button";
// import Carousel from "@/Components/CustomerComponents/MultiCardSlider/MultiCardSlider";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { imageUrl } from "@/data/imageUrl";
import { Carousel } from "@trendyol-js/react-carousel";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import {
  BsFacebook,
  BsLinkedin,
  BsPinterest,
  BsShieldSlash,
  BsTruck,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { FiDollarSign, FiSun } from "react-icons/fi";
import { GrSync } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardArrowRight,
} from "react-icons/md";
import getSingleProduct from "@/utils/getSingleProduct";
import isLoggedIn from "@/auth/isLoggedIn";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeCart } from "@/utils/cartItems";
import { toast } from "react-hot-toast";

const SingleProduct = ({ res, loggedIn }) => {
  const [stock, setStock] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const { productId } = router.query;
  const { cart } = useSelector((state) => state.cart);
  const [isDescCollapsed, setIsDescCollapsed] = useState(true);
  const [currentImage, setCurrentImage] = useState(imageUrl[0]);
  const { price, description, images, title, unit, quantity, category, tags } =
    res;

  const existsInCart = cart?.some((item) => item?.product?.id === res.id);

  const add_To_Cart = async () => {
    await addToCart({
      productId: res.id,
      quantity: 1,
    });

    dispatch({
      type: "ADD_TO_CART",
      item: { product: res, quantity: 1 },
    });
  };

  const removeItem = async () => {
    await removeCart({
      productId: res.id,
    });
    dispatch({
      type: "REMOVE_CART",
      id: res.id,
    });
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Product Details</title>
      </Head>
      <section>
        <div className="container">
          <ul className="flex items-center gap-2 py-4">
            <li>Home</li>
            <MdKeyboardArrowRight />
            <li>Fresh-vegetable</li>
            <MdKeyboardArrowRight />

            <li>Rainbow Chard</li>
          </ul>
        </div>
        <div className="custom-container bg-white xl:flex p-4 rounded-md my-8">
          <div className="xl:w-1/3">
            <div className="w-fit mx-auto">
              <Image src={images[0]} height={400} width={400} alt={title} />
            </div>
            <hr />
            <div className="max-w-[500px] mx-auto">
              <Carousel
                slide={1}
                show={3.5}
                transition={0.5}
                responsive={true}
                swiping={true}
                leftArrow={
                  <MdArrowBackIos className="relative inset-y-1/2 text-2xl cursor-pointer hover:scale-110 duration-200" />
                }
                rightArrow={
                  <MdArrowForwardIos className="relative inset-y-1/2 text-2xl cursor-pointer hover:scale-105 duration-200" />
                }
                useArrowKeys={true}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`mr-2 hover:scale-105 duration-200 ${
                      image === currentImage ? "opacity-95" : "opacity-50"
                    }`}
                    onClick={() => setCurrentImage(image)}
                  >
                    <Image
                      src={image}
                      alt="placeholder"
                      height={200}
                      width={200}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="md:flex xl:w-2/3 ">
            <div className="p-2">
              <h2 className="mb-1 font-semibold">{title}</h2>
              {stock ? (
                <div className="bg-primary-light w-fit text-sm px-2 py-1 rounded-full font-bold mb-6">
                  <span className="text-primary">Stock:</span>{" "}
                  <span className="text-red">{quantity}</span>
                </div>
              ) : (
                <span className="mb-3 text-sm bg-red-200 inline-block px-3 py-1 rounded-full text-gray-primary">
                  Out Of Stock
                </span>
              )}

              <h2 className="font-bold mb-4">${price}</h2>

              <p
                className={`text-gray-500 mb-2 ${
                  isDescCollapsed && "line-clamp-2"
                }`}
              >
                {description}
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
              <div className="mt-2 mb-4">
                <p>Unit: {unit}</p>
              </div>
              <div className="flex gap-4">
                <Button
                  text={!existsInCart ? "Add to Cart" : "Added"}
                  className={"px-12 py-2 "}
                  style={{
                    ...(existsInCart
                      ? {
                          background: "#059669 !important",
                          color: "white !important",
                        }
                      : {}),
                  }}
                  onClick={() => {
                    if (!loggedIn) {
                      toast.error("Login first to add product in cart");
                      return;
                    } else {
                      if (existsInCart) {
                        removeItem();
                      } else {
                        add_To_Cart();
                      }
                    }
                  }}
                />
              </div>
              <div className="font-medium mt-4">
                Category:{" "}
                <span className="text-gray-primary underline">
                  {category.name}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-primary p-4 font-medium">
                {tags.map((tag) => (
                  <span>{tag}</span>
                ))}
              </div>

              <div className="my-6 space-y-4">
                <div>
                  <p className="font-semibold">Share in your social network</p>
                </div>
                <ul className="text-sm flex">
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="#"
                      target="_blank"
                      aria-label="social-link-Facebook"
                      className="block text-center mx-auto text-[#3b5998] hover:bg-white"
                    >
                      <BsFacebook className="w-8 h-6" />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="#"
                      target="_blank"
                      aria-label="social-link-twitter"
                      className="block text-center mx-auto text-[#00aced] hover:bg-white"
                    >
                      <BsTwitter className="w-8 h-6" />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="#"
                      target="_blank"
                      aria-label="social-link-pinterest"
                      className="block text-center mx-auto text-[#cb2128] hover:bg-white"
                    >
                      <BsPinterest className="w-8 h-6" />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="#"
                      target="_blank"
                      aria-label="social-link-Linkedin"
                      className="block text-center mx-auto text-[#007fb1] hover:bg-white"
                    >
                      <BsLinkedin className="w-8 h-6" />
                    </a>
                  </li>
                  <li className="flex items-center mr-3 transition ease-in-out duration-500">
                    <a
                      href="#"
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
          </div>
        </div>
      </section>
    </>
  );
};

SingleProduct.getLayout = (page) => {
  const loggedIn = page.props.children.props.children[1].props.loggedIn;
  return <CustomerLayout loggedIn={loggedIn}>{page}</CustomerLayout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const id = params.productId;
  const res = await getSingleProduct(id);
  const { loggedIn } = await isLoggedIn(context);
  if (!res) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
  return {
    props: {
      res,
      loggedIn,
    },
  };
}

export default SingleProduct;
