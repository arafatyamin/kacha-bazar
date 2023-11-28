import CarouselComponent from "@/Components/CommonComponents/CarouselComponent";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TinyBanner from "../Banner/TinyBanner";
import OfferCard from "../OfferPage/OfferCard";
import Button from "@/Components/CommonComponents/shared/Button";
import Link from "next/link";

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
  return (
    <div className="py-8 bg-white ">
      <div className="custom-container">
        <div className="max-w-screen-2xl mx-auto lg:flex gap-8">
          {/* left  */}
          <div className="w-full lg:w-3/5 rounded-md overflow-hidden">
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
          <div className="relative w-2/5 max-h-[365px] border-2 border-[var(--clr-red)] rounded-md hover:border-[var(--clr-primary)] hidden lg:inline-block overflow-auto scrollbar-hide">
            <div className="sticky top-0 z-30 h-10 bg-orange-200 text-center overflow-hidden rounded-t-md pt-2 font-bold">
              Latest Super Discount Active Coupon Code
            </div>
            <div className="flex flex-col gap-4">
              {Array(2).fill().map((_, index) => (
                <OfferCard
                  key={index}
                  title="Another Card Title"
                  categories="Grocery"
                  discount="12"
                  shippingCost="1000"
                  couponCode="WINTER21"
                  status="Inactive"
                  imageUrl="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg"
                  validity={
                    "2d"
                  }
                />
              ))}
              <div className="w-full text-center my-4">
                <Link href={"/offerPage"}>
                  < Button text={
                    "Show More"
                  }
                  />
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