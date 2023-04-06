import Head from "next/head";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>

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

        <div className="w-full mt-24">
            <div className="bg-indigo-50 py-10 lg:py-16 bg-repeat bg-center overflow-hidden">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-2 md:gap-3 lg:gap-3 items-center">
                        <div className="flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-start">
                          <span>
                            <img className="block w-auto" src="https://kachabazar-store.vercel.app/_next/image?url=%2Fapp-download-img-left.png&w=640&q=75" alt="" />
                          </span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif mb-3">Get Your Daily Needs From Our KachaBazar Store</h3>
                            <p className="text-base opacity-90 leading-7">There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer.</p>
                            <div className="mt-8 flex">
                                <a href="">
                                  <span>
                                    <img className="mr-2 rounded" src="https://kachabazar-store.vercel.app/app/app-store.svg" alt="" />
                                  </span>
                                </a>
                                <a href="">
                                  <span>
                                    <img src="https://kachabazar-store.vercel.app/app/play-store.svg" alt="" />
                                  </span>
                                </a>
                            </div>
                        </div>
                        <div className="md:hidden lg:block">
                                <div className="flex-grow hidden lg:flex md:flex lg:justify-end">
                                <span>
                                    <img className="block w-auto" src="https://kachabazar-store.vercel.app/_next/image?url=%2Fapp-download-img.png&w=640&q=75" alt="" />
                                </span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ======================App Store Section Part End====================== */}

      </main>
    </>
  );
};

export default home;


// grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1