import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from '../../CommonComponents/shared/Button';
import TinyBanner from "../Banner/TinyBanner";
import CarouselComponent from "@/Components/CommonComponents/CarouselComponent";

const carouselSlider = [
    {
        imageURL: "/images/home/slider-1.webp",
        heading: "The Best Quality Products Guranteed!!",
        subheading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem."
    },
    {
        imageURL: "/images/home/slider-2.webp",
        heading: "The Best Quality Products Guranteed!!",
        subheading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem."
    },
    {
        imageURL: "/images/home/slider-3.webp",
        heading: "The Best Quality Products Guranteed!!",
        subheading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, rem."
    },
]
const HeroSection = () => {
  return (
    <div className="py-8 bg-white ">
      <div className="max-w-screen-2xl mx-auto lg:flex px-10 gap-8">
        {/* left  */}
        <div className="w-full lg:w-3/5 rounded-md overflow-hidden">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            emulateTouch={true}
          >
            {carouselSlider.map((item) => (
              <CarouselComponent
                heading={item.heading}
                subHeading={item.subheading}
                bgImage={item.imageURL}
              />
            ))}
          </Carousel>
        </div>

        {/* right  */}
        <div className="w-2/5 border-2 border-[var(--clr-red)] rounded-md hover:border-[var(--clr-primary)] ">
          <div className="h-10 bg-orange-200 text-center overflow-hidden rounded-t-md pt-2 font-bold">Latest Super Discount Active Coupon Code</div>
        </div>
        {/* <OfferComponent/> */}
      </div>
      <TinyBanner />
    </div>
  );
}

export default HeroSection

