import React from 'react'
import Button from './shared/Button';

const CarouselComponent = ({ heading, subHeading, bgImage }) => {
  return (
    <div className="relative text-left rounded-md overflow-hidden">
      <img src={bgImage} />
      <div className="absolute top-0 w-2/3 m-3 p-3 md:m-6 md:p-6 lg:m-8 lg:p-8 space-y-2">
        <h1 className="font-bold text-xl sm:text-3xl">{heading}</h1>
        <p className="text-gray-primary text-xs md:text-base">{subHeading}</p>
        <Button
          text={"Shop Now"}
          fill={true}
          className="text-xs md:text-base px-2 py-2 "
        />
      </div>
    </div>
  );
};

export default CarouselComponent