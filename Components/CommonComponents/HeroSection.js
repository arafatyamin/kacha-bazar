import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Button from './shared/Button';

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
    <div className="my-8  ">
      <div className="max-w-screen-2xl mx-auto md:flex px-10 gap-8">
        {/* left  */}
        <div className="w-full md:w-3/5 rounded-md overflow-hidden">
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
    </div>
  );
}

export default HeroSection

const CarouselComponent = ({heading, subHeading,bgImage}) => {
    return (
      <div className="relative text-left rounded-md overflow-hidden">
        <img src={bgImage} />
        <div className="absolute top-0  max-w-[490px] m-4 p-4 md:m-8 md:p-8 space-y-2">
          <h1 className="font-bold text-2xl md:text-3xl">{heading}</h1>
          <p className="text-gray-primary text-sm md:text-base">{subHeading}</p>
          <Button text={"Shop Now"} fill={true} className="text-sm px-2 py-2" />
        </div>
      </div>
    );
}