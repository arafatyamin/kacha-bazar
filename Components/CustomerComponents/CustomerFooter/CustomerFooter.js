import Image from "next/image";
import {
  BsFacebook,
  BsLinkedin,
  BsPinterest,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import FlotingCart from "../FlotingCart/FlotingCart";
import ScrollToTop from "./ScrollToTop";

const CustomerFooter = () => {
  return (
    <footer className="bg-white">
      <div className="container">
        <div className="hidden relative py-6 lg:grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 mx-auto border-b-2 border-gray-100 bg-white">
          <div className="border-r border-gray-200 py-1 flex items-center justify-center bg-white">
            <div className="mr-3">
              <figure></figure>
            </div>
            <div className="">
              <span className="block text-sm font-medium leading-5">
                Free Shipping From $500.00
              </span>
            </div>
          </div>
          <div className="border-r border-gray-200 py-1 flex items-center justify-center bg-white">
            <div className="mr-3">
              <figure></figure>
            </div>
            <div className="">
              <span className="block text-sm font-medium leading-5">
                Support 24/7 At Anytime
              </span>
            </div>
          </div>
          <div className="border-r border-gray-200 py-1 flex items-center justify-center bg-white">
            <div className="mr-3">
              <figure></figure>
            </div>
            <div className="">
              <span className="block text-sm font-medium leading-5">
                Secure Payment Totally Safe
              </span>
            </div>
          </div>
          <div className="border-r border-gray-200 py-1 flex items-center justify-center bg-white">
            <div className="mr-3">
              <figure></figure>
            </div>
            <div className="">
              <span className="block text-sm font-medium leading-5">
                Latest Offer Upto 20% Off
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 w-full">
          <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
            <div className="mx-auto max-w-screen-2xl">
              <div className="grid grid-cols-1 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                  <h1 className="text-lg font-medium mb-2">Company</h1>
                  <ul className="text-sm flex flex-col space-y-3">
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Contact us
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Latest news
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                  <h1 className="text-lg font-medium mb-2">Top Category</h1>
                  <ul className="text-sm flex flex-col space-y-3">
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Fish & Meat
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Soft Drinks
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Baby Care
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Beauty & Health
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                  <h1 className="text-lg font-medium mb-2">My Account</h1>
                  <ul className="text-sm flex flex-col space-y-3">
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        My Orders
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Recent Orders
                      </a>
                    </li>
                    <li className="flex items-baseline">
                      <a
                        href="/"
                        className="text-gray-600 inline-block w-full hover:text-emerald-500"
                      >
                        Updated Profile
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                  <div className="text-md font-medium mb-2">
                    <Image
                      src="https://kachabazar-store.vercel.app/logo/logo-color.svg"
                      width="100"
                      height="100"
                    />
                  </div>
                  <ul className="text-sm flex flex-col space-y-3">
                    <li className="flex items-baseline">
                      <p className="text-gray-600 inline-block w-full">
                        987 Andre Plain Suite High Street 838,
                      </p>
                    </li>
                    <li className="flex items-baseline">
                      <p className="text-gray-600 inline-block w-full">
                        Lake Hestertown, USA
                      </p>
                    </li>
                    <li className="flex items-baseline">
                      <p className="text-gray-600 inline-block w-full">
                        Tell: 02.356.1666
                      </p>
                    </li>
                    <li className="flex items-baseline">
                      <p className="text-gray-600 inline-block w-full">
                        Email: ccruidk@test.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-screen-2xl bg-gray-50 shadow-sm border border-gray-50 rounded-lg">
          <div className="flex py-8 items-center justify-around">
            <div className="">
              <span className="text-base leading-7 font-medium block mb-2 pb-0 5">
                Follow Us
              </span>
              <ul className="text-sm flex">
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    aria-label="social-link-Facebook"
                    className="block text-center mx-auto text-[#3b5998] hover:bg-white"
                  >
                    <BsFacebook className="w-8 h-6" />
                  </a>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    aria-label="social-link-twitter"
                    className="block text-center mx-auto text-[#00aced] hover:bg-white"
                  >
                    <BsTwitter className="w-8 h-6" />
                  </a>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    aria-label="social-link-pinterest"
                    className="block text-center mx-auto text-[#cb2128] hover:bg-white"
                  >
                    <BsPinterest className="w-8 h-6" />
                  </a>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    aria-label="social-link-Linkedin"
                    className="block text-center mx-auto text-[#007fb1] hover:bg-white"
                  >
                    <BsLinkedin className="w-8 h-6" />
                  </a>
                </li>
                <li className="flex items-center mr-3 transition ease-in-out duration-500">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    aria-label="social-link-whatsapp"
                    className="block text-center mx-auto text-[#25d366] hover:bg-white"
                  >
                    <BsWhatsapp className="w-8 h-6" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center hidden md:block">
              <p className="text-base leading-7 font-medium block">
                Call Us Today!
              </p>
              <h5 className="text 2xl font-bold text-emerald-500 leading-7">
                +012345-67900
              </h5>
            </div>
          </div>
        </div>
        {/* ======================Floating cart card component start ====================== */}
        <div className="fixed top-80 right-0 hidden md:block">
          <FlotingCart />
        </div>
        {/* ======================Floating cart card component start ====================== */}

        {/* ======================Scroll to top card component start ====================== */}
        <ScrollToTop />
        {/* ======================Scroll to top card component start ====================== */}

        <div className="mx-auto mx-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
          <p className="text-sm text-gray-500 leading-6">
            Copyright 2022 @
            <a href="https://w3schools.org" className="text-emerald-500">
              HtmlLover
            </a>
            , All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CustomerFooter;
