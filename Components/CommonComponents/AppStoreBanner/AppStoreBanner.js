

const AppStoreBanner = () => {
    return (
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
                      <div className="mt-8 gap-4 flex">
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
    )
  }
  
  export default AppStoreBanner