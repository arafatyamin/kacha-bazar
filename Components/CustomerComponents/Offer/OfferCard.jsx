import Image from "next/image";

const OfferCard = ({ title, discount, categories, imageUrl, shippingCost, couponCode, status }) => {
    return (
      <div className="block md:flex lg:flex md:justify-between lg:justify-between items-center bg-white rounded-md shadow-sm">
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
          <div className="flex items-center font-semibold">
            <span className="flex items-center justify-center bg-emerald-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">23</span>
            :
            <span className="flex items-center justify-center bg-emerald-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">2</span>
            :
            <span className="flex items-center justify-center bg-emerald-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">12</span>
            :
            <span className="flex items-center justify-center bg-emerald-100 text-sm font-serif font-semibold px-2 py-1 rounded mx-1">36</span>
          </div>
        </span>
        <h2 className="font-serif text-lg leading-6 font-medium mb-3">{title}</h2>
        <p className="font-serif font-bold text-xl text-gray-600"><span className="text-lg md:text-xl lg:text-2xl leading-12 text-red-500 font-extrabold">{discount}%</span> Off</p>
        </div>
        </div>
        <div className="md:border-l-2 lg:border-l-2 border-dashed my-6 lg:w-1/3 md:w-1/3 relative px-6">
        <div className="flex lg:my-6 md:my-5 mb-6 items-center">
          <div className="w-full">
            <div className="block">
              <div className="fot-serif font-medium flex items-center mb-1">
                <span>Coupon</span>
                <div className="ml-2">
                  <span className={`${status=="Active"?"text-emerald-600":"text-red-600"}  inline-block`}>{status}</span>
                </div>
              </div>
              <div className="font-serif border border-dashed bg-emerald-50 py-2 border-emerald-300 rounded-lg text-center block">
                <button className="block w-full">
                  <span className="uppercase font-serif font-semibold text-base leading-7 text-emerald-600">{couponCode}</span>
                </button>
              </div>
            </div>
            <p className="text-xs leading-5 text-gray-500 mt-2">
             * This coupon code will apply on 
              <span className="font-bold text-gray-700">{categories} type products</span>
              and when you shopping more then
              <span className="font-bold text-gray-700"> ${shippingCost}</span>
            </p>
          </div>
        </div>
        </div>
      </div>
    )
  }
  
  export default OfferCard;
  