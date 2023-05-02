import AppStoreBanner from "@/Components/CommonComponents/AppStoreBanner/AppStoreBanner";
// import CartDrawer from "@/Components/CommonComponents/CartDrawer/CartDrawer";
import CategoryCard from "@/Components/CustomerComponents/Cards/CategoryCard/CategoryCard";
import FlotingCart from "@/Components/CustomerComponents/FlotingCart/FlotingCart";
// import UserSideNav from "@/Components/CustomerComponents/CustomerAdmin/UserSideNav";
import MobileAdsBanner from "@/Components/CommonComponents/MobileAdsBanner/MobileAdsBanner";
import BottomNav from "@/Components/CustomerComponents/BottomNav";
import ProductCard from "@/Components/CustomerComponents/Cards/ProductCard/ProductCard";
import HeroSection from "@/Components/CustomerComponents/HomeComponents/HeroSection";
import CustomerLayout from "@/Layouts/CustomerLayout";
import { categoryItems } from "@/data/data";
import { offeredProductItems, productItems } from "@/data/productData";
import Head from "next/head";
import ScrollToTop from "@/Components/CustomerComponents/CustomerFooter/ScrollToTop";

const home = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <main>
        <div className="-z-3">
          <HeroSection />
          {/* <BottomNav /> */}

          {/* ======================Featured Categories Part Start====================== */}
          <div className="custom-container py-6 ">
            <div className="text-center mt-10">
              <h2 className="font-bold text-xl sm:text-2xl">
                Featured Categories
              </h2>
              <p className="text-gray-primary text-sm sm:text-base">
                Choose your necessary products from this feature categories.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-8">
              {categoryItems.map((categoryItem) => (
                <CategoryCard data={categoryItem} key={categoryItem.id} />
              ))}
            </div>
            {/* <UserSideNav /> */}
          </div>
          {/* ======================Featured Categories Part End====================== */}

          {/* ======================Featured Products Part Start====================== */}
          <section>
            <div className="bg-gray-50 my-4 py-4 px-4 md:px-0">
              <div className="custom-container">
                <div className="text-center mt-10 space-y-4">
                  <h2 className="font-bold text-xl sm:text-2xl">
                    Popular Products for Daily Shopping
                  </h2>
                  <p className="text-gray-primary text-sm sm:text-base max-w-2xl mx-auto">
                    See all our popular products in this week. You can choose
                    your daily needs products from this list and get some
                    special offer with free shipping.
                  </p>
                </div>
                <div className="py-10 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {productItems &&
                    productItems?.length > 0 &&
                    productItems.map((item, ind) => (
                      <ProductCard
                        key={ind}
                        imgUrl={item.imgUrl}
                        title={item.title}
                        quantity={item.quantity}
                        price={item.price}
                        offer={item.offer}
                      />
                    ))}
                </div>
              </div>
            </div>
          </section>

          {/* ======================Featured Products Part End====================== */}

          {/* ======================Mobile Ads Banner Part Start====================== */}
        </div>
        <MobileAdsBanner />

        {/* ======================Mobile Ads Banner Part End====================== */}

        <section>
          <div className="bg-gray-50 my-4 py-4 px-4 md:px-0">
            <div className="custom-container">
              <div className="text-center mt-10 space-y-4">
                <h2 className="font-bold text-xl sm:text-2xl">
                  Popular Products for Daily Shopping
                </h2>
                <p className="text-gray-primary text-sm sm:text-base max-w-2xl mx-auto">
                  See all our popular products in this week. You can choose your
                  daily needs products from this list and get some special offer
                  with free shipping.
                </p>
              </div>
              <div className="py-10 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {offeredProductItems &&
                  offeredProductItems?.length > 0 &&
                  offeredProductItems.map((item, index) => (
                    <ProductCard
                      key={index}
                      imgUrl={item.imgUrl}
                      title={item.title}
                      quantity={item.quantity}
                      price={item.price}
                      offer={item.offer}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======================App Store Section Part Start====================== */}
        <AppStoreBanner />
        {/* ======================App Store Section Part End====================== */}

        {/* ======================Floating cart card component start ====================== */}
        <div className="fixed top-80 right-0 hidden md:block">
          <FlotingCart />
        </div>
        {/* ======================Floating cart card component start ====================== */}
        {/* ======================Scroll to top component start ====================== */}
        <div>
          <ScrollToTop />
        </div>
        {/* ======================Scroll to top component start ====================== */}
      </main>
    </>
  );
};

home.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};
export default home;
