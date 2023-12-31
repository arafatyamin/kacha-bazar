import Image from "next/image";
import { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

const OfferCard = ({
  title,
  discount,
  categories,
  imageUrl,
  shippingCost,
  couponCode,
  status,
  validity,


}) => {
  validity = validity?.endsWith("d")
    ? Number(validity.slice(0, -1)) * 24 * 60 * 60 * 1000
    : validity?.endsWith("h") && Number(validity.slice(0, -1)) * 60 * 60 * 1000;
  const [copyStatus, setCopyStatus] = useState("");

  function handleCopyClick() {
    const copyText = document.getElementById("couponCode");
    if (copyText) {
      navigator.clipboard
        .writeText(copyText.innerText)
        .then(() => setCopyStatus("Copied!"))
        .catch(() => setCopyStatus("Copy failed."));
    }
  }

  return (
    <div className="block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-sm h-[190px] border">
      <div className="p-6 flex items-center justify-items-start  w-2/3">
        <figure className="image h-full">
          <Image
            src={imageUrl}
            alt="My Image"
            width="120"
            height="220"
            className="rounded-md"
            priority
          />
        </figure>
        <div className="ml-5">
          <span className="inline-block mb-2">
            {/* countdown start */}
            <Countdown date={Date.now() + validity} renderer={renderer} />
          </span>
          <h2 className=" text-lg leading-6 font-medium mb-3">{title}</h2>
          <div className="flex items-center">
            <p className=" font-bold flex text-xl text-gray-600">
              <span className="text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold">
                {discount}%
              </span>{" "}
              Off
            </p>
            <div className="font-normal flex items-center px-3 py-1 rounded-full bg-primary-light ml-2">
              <span
                className={`${status == "Active" ? "text-emerald-500" : "text-red-600"
                  }  inline-block`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 md:w-1/3 relative px-2">
        <div className="before:my-6 flex md:my-5 mb-6 items-center">
          <div className="w-full">
            <div className="block">
              <div className=" border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block">
                <button className="block w-full">
                  {copyStatus ? (
                    <span className="uppercase  font-semibold text-base leading-7 text-emerald-600">
                      {copyStatus}
                    </span>
                  ) : (
                    <span
                      id="couponCode"
                      onClick={handleCopyClick}
                      className="uppercase  font-semibold text-base leading-7 text-emerald-600"
                    >
                      {couponCode}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

function renderer({ days, hours, minutes, seconds, completed }) {
  if (completed) {
    return (
      <div className="flex items-center font-semibold">
        <span className="flex items-center justify-center bg-[var(--clr-red-light)] text-sm  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(days)}
        </span>
        :
        <span className="flex items-center justify-center bg-[var(--clr-red-light)] text-sm  font-semibold px-2 py-1 rounded mx-1">
          {zeroPad(hours)}
        </span>
        :
        <span className="flex items-center justify-center bg-[var(--clr-red-light)] text-sm  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(minutes)}
        </span>
        :
        <span className="flex items-center justify-center bg-[var(--clr-red-light)] text-sm  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(seconds)}
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex items-center font-semibold">
        <span className="flex items-center justify-center bg-primary text-white  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(days)}
        </span>
        :
        <span className="flex items-center justify-center bg-primary text-white  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(hours)}
        </span>
        :
        <span className="flex items-center justify-center bg-primary text-white  font-semibold px-2 py-1 rounded mx-1 w-8">
          {zeroPad(minutes)}
        </span>
        :
        <span className="flex items-center justify-center bg-primary text-white px-2 py-1 rounded mx-1 w-8">
          {zeroPad(seconds)}
        </span>
      </div>
    );
  }
}