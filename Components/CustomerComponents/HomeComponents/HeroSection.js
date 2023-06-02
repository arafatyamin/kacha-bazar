import CarouselComponent from "@/Components/CommonComponents/CarouselComponent";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TinyBanner from "../Banner/TinyBanner";
import OfferCard from "../OfferPage/OfferCard";
import Button from "@/Components/CommonComponents/shared/Button";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";

const carouselSlider = [
  {
    imageURL: "/images/home/slider-1.webp",
    heading: "The Best Quality Products Guranteed!!",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem.",
  },
  {
    imageURL: "/images/home/slider-2.webp",
    heading: "The Best Quality Products Guranteed!!",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem.",
  },
  {
    imageURL: "/images/home/slider-3.webp",
    heading: "The Best Quality Products Guranteed!!",
    subheading:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem.",
  },
];
const HeroSection = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    getCoupons();
  }, []);

  const getCoupons = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          "/admin/coupons?page=1&limit=2"
      );
      console.log(response.data.data.coupons);
      setCoupons(response.data.data.coupons);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white ">
      <div className="container">
        <div className="max-w-screen-2xl mx-auto lg:flex gap-8">
          {/* left  */}
          <div className="w-full xl:w-3/5 rounded-md overflow-hidden">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              emulateTouch={true}
              showThumbs={false}
            >
              {carouselSlider.map((item, index) => (
                <CarouselComponent
                  key={index}
                  heading={item.heading}
                  subHeading={item.subheading}
                  bgImage={item.imageURL}
                />
              ))}
            </Carousel>
          </div>

          {/* right  */}
          <div className="relative xl:w-2/5 max-h-[365px] border-2 border-[var(--clr-red)] rounded-md hover:border-[var(--clr-primary)] hidden xl:inline-block overflow-auto scrollbar-hide">
            <div className="sticky top-0 z-30 h-10 bg-orange-200 text-center overflow-hidden rounded-t-md pt-2 font-bold">
              Latest Super Discount Active Coupon Code
            </div>
            <div className="flex flex-col gap-4">
              {coupons?.map((coupon, index) => (
                <OfferCard
                  key={index}
                  coupon={coupon}
                  status="Active"
                  validity={"1d"}
                />
              ))}
              <div className="w-full text-center my-4">
                <Link href={"/offerPage"}>
                  <Button text={"Show More"} />
                </Link>
              </div>
            </div>
          </div>
          {/* <OfferComponent/> */}
        </div>
        <TinyBanner />
      </div>
    </div>
  );
};

export default HeroSection;
