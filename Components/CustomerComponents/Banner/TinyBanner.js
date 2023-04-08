import React from 'react'

const TinyBanner = () => {
  return (
    <div className=" bg-orange-100 px-10 py-6 rounded-lg mt-6 hidden lg:block">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-primary text-xl">
                <span className="text-emerald-600 font-bold mr-2">100% Natural Quality</span>
                 Organic Product
              </h1>
              <p className="text-gray-500">
              See Our latest discounted products from here and get a special
              <a className="text-emerald-600 ml-1" href="">discount product</a>
              </p>
            </div>
            <a className="text-sm font-primary font-medium px-6 py-2 bg-emerald-500 text-center rounded-full text-white hover:bg-emerald-700" href="">Shop Now</a>
          </div>
        </div>
  )
}

export default TinyBanner