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
    <div>
        
      {/* left  */}
      <div className="w-full md:w-2/3 ">
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        >
          {carouselSlider.map((item) => (
            <CarouselComponent heading={item.heading} subHeading={item.subheading} bgImage={item.imageURL}/>
          ))}
        </Carousel>
      </div>

      {/* right  */}
      {/* <OfferComponent/> */}
    </div>
  );
}

export default HeroSection

const CarouselComponent = ({heading, subHeading,bgImage}) => {
    return (
      <div className="relative text-left">
        <img src={bgImage} />
        <div className="absolute top-0 p-8 max-w-[490px]">
          <h1 className='font-bold'>{heading}</h1>
          <p className='text-gray-primary'>{subHeading}</p>
          <Button text={"Shop Now"} fill={true} className="" />
        </div>
      </div>
    );
}