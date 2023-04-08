import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from '../../CommonComponents/shared/Button';
import TinyBanner from "../Banner/TinyBanner";

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
        <div className="w-2/5  bg-red-100"></div>
        {/* <OfferComponent/> */}
      </div>
      <TinyBanner />
    </div>
  );
}

export default HeroSection

const CarouselComponent = ({heading, subHeading,bgImage}) => {
    return (
      <div className="relative text-left rounded-md overflow-hidden">
        <img src={bgImage} />
        <div className="absolute top-0 w-2/3 m-3 p-3 md:m-6 md:p-6 lg:m-8 lg:p-8 space-y-2">
          <h1 className="font-bold text-xl sm:text-3xl">{heading}</h1>
          <p className="text-gray-primary text-xs md:text-base">{subHeading}</p>
          <Button text={"Shop Now"} fill={true} className="text-xs md:text-base px-2 py-2 " />
        </div>
      </div>
    );
}