import Head from "next/head";
import CustomerLayout from "@/Layouts/CustomerLayout";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { BsShieldSlash, BsTruck } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { FiDollarSign, FiSun } from "react-icons/fi";
import { GrSync } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";

const SingleProduct = () => {
  const [stock, setStock] = useState(true);
  const router = useRouter();
  const { productId } = router.query;
  return (
    <>
      <Head>
        <title>Product Details</title>
      </Head>
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
              <div className="p-2">
                <Image src="" alt="Product Image" width="350" height="280" />
              </div>
              <div className="p-2">
                <h1 className="mb-1 font-medium">Clementine</h1>
                <p className="mb-3">SKU: {productId}</p>
                <h2 className="font-bold mb-2">$13</h2>
                {stock ? (
                  <span className="mb-3 text-sm bg-green-200 inline-block px-3 py-1 rounded-full">
                    In Stock
                  </span>
                ) : (
                  <span className="mb-3 text-sm bg-red-200 inline-block px-3 py-1 rounded-full">
                    Out Of Stock
                  </span>
                )}

                <p className="text-gray-500 mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima iste qui, necessitatibus aliquam quae quo nobis
                  corporis at labore omnis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nostrum, voluptatem!
                </p>
              </div>
            </div>
            <div className="p-2">
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
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default SingleProduct;
