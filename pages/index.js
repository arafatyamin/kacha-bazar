import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";
import CartDrawer from "@/Components/CommonComponents/CartDrawer/CartDrawer";
import FlotingCart from "@/Components/CustomerComponents/FlotingCart/FlotingCart";
import Header from "@/Components/CommonComponents/Header";
import HeroSection from "@/Components/CommonComponents/HeroSection";
import Head from "next/head";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className="relative">
      <main>
        <Header />
        <HeroSection/>

        {/* ======================Mobile Ads Banner Part Start====================== */}
        <div className="block mx-auto max-w-screen-2x mt-24">
            <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div  className="lg:p-16 p-6 bg-emerald-500 shadow-sm border rounded-lg">
                  <div className="w-full bg-white shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg">
                      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
                        <div className="lg:w-full">
                            <span className="text-base lg:text-lg">
                            Organic Products and Food
                            </span>
                            <h2 className="font-serif text-lg lg:text-2xl font-bold mb-1">Quick Delivery to 
                             <span className="text-emerald-500 ml-1">Your Home</span>
                            </h2>
                            <p className="text-sm font-sans leading-6">
                            There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer. See Our latest discounted products from here and get a special discount.
                            </p>
                            <a href="" className="lg:w-25% text-xs font-serif font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white hover:bg-emerald-600">Download App</a>
                        </div>
                        <div className="">
                            <span className="">
                              <img className=" object-cover ml-20" src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fdelivery-boy.png&w=384&q=75" alt="" />
                            </span>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        {/* ======================Mobile Ads Banner Part End====================== */}



        {/* ======================App Store Section Part Start====================== */}
        <AppStoreBanner></AppStoreBanner>
        {/* ======================App Store Section Part End====================== */}


        {/* ======================Floating cart card component start ====================== */}
          <div className=" fixed top-80 right-0">
            <FlotingCart></FlotingCart>
          </div>
        {/* ======================Floating cart card component start ====================== */}


      </main>
    </>
  );
};

export default home;

