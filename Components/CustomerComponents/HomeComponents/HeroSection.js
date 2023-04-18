import CarouselComponent from "@/Components/CommonComponents/CarouselComponent";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import TinyBanner from "../Banner/TinyBanner";
import OfferCard from "../OfferPage/OfferCard";
import Button from "@/Components/CommonComponents/shared/Button";

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
            <div>
              {Array(2).fill().map((_, index) => (
                <OfferCard
                  key={index}
                  title="Card Title"
                  categories="Grocery"
                  discount="15"
                  shippingCost="500"
                  couponCode="SUMMER21"
                  status="Active"
                  imageUrl="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75"
                  validity={"1d"}
                />
              ))}
              <div className="w-full text-center my-4">
              <Button text={"Show More"} fill={true}/>

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
