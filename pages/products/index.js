import Image from "next/image";

import img1 from "@/public/images/products/cta-bg-1.webp";
import img2 from "@/public/images/products/cta-bg-2.webp";
import img3 from "@/public/images/products/cta-bg-3.webp";
import Button from "@/Components/CommonComponents/shared/Button";
import FeaturedProducts from "@/Components/CustomerComponents/HomeComponents/FeaturedProducts";
import { offeredProductItems, productItems } from "@/data/productData";
import Carousel from "@/Components/CustomerComponents/MultiCardSlider/MultiCardSlider";
import { categoryItems } from "@/data/data";
import CustomerLayout from "@/Layouts/CustomerLayout";

const ProductsPage = () => {
  console.log(categoryItems);

  return (
    <div className="container mt-12">
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="relative rounded-lg w-fit m-2">
          <Image className=" rounded-lg" src={img1}></Image>
          <div className="absolute top-0 left-0 z-10 mt-4 flex-col flex w-full items-center justify-center text-white">
            <p className=" font-bold">Taste of</p>
            <p className="text-2xl font-bold">Fresh and Natural</p>
            <p>Weakened discount offer</p>
            <Button
              text={"Shop Now"}
              size={"sm"}
              fill={"true"}
              className="text-xs md:text-base px-2 py-2 w-fit border-none"
            />
          </div>
        </div>
        <div className="relative rounded-lg w-fit m-2">
          <Image className=" rounded-lg" src={img2}></Image>
          <div className="absolute top-0 left-0 z-10 mt-4 flex-col flex w-full items-center justify-center text-white">
            <p className=" font-bold">Taste of</p>
            <p className="text-2xl font-bold">Fresh and Natural</p>
            <p>Weakened discount offer</p>
            <Button
              text={"Shop Now"}
              size={"sm"}
              fill={"true"}
              className="text-xs md:text-base px-2 py-2 w-fit border-none"
            />
          </div>
        </div>
        <div className="relative rounded-lg w-fit m-2">
          <Image className=" rounded-lg" src={img3}></Image>
          <div className="absolute top-0 left-0 z-10 mt-4 flex-col flex w-full items-center justify-center text-white">
            <p className=" font-bold">Taste of</p>
            <p className="text-2xl font-bold">Fresh and Natural</p>
            <p>Weakened discount offer</p>
            <Button
              text={"Shop Now"}
              size={"sm"}
              fill={"true"}
              className="text-xs md:text-base px-2 py-2 w-fit border-none"
            />
          </div>
        </div>
      </div>

      <div className="container mt-12">
        <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: 64 }}>
          <Carousel show={8}>
            {categoryItems.map((cat) => (
              <div>
                <div
                  className="  mx-1 bg-white rounded-md"
                  style={{ padding: 8 }}
                >
                  <img
                    className="mx-auto"
                    src={cat?.imgUrl}
                    alt="placeholder"
                    style={{ width: "30%" }}
                  />
                  <p className="text-center text-xs mt-1">{cat?.title}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      <div>
        <FeaturedProducts Items={productItems}></FeaturedProducts>
      </div>
    </div>
  );
};

ProductsPage.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default ProductsPage;