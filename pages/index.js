import Head from "next/head";
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
import axios from "axios";
import getCustomer from "@/utils/getCustomer";

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

          {/* ======================Featured Categories Part Start====================== */}
          <div className="container">
            <div className="text-center mt-10">
              <h2 className="font-bold text-xl sm:text-2xl">
                Featured Categories
              </h2>
              <p className="text-gray-primary text-sm sm:text-base">
                Choose your necessary products from this feature categories.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-2 mt-8">
              {categoryItems.map((categoryItem) => (
                <CategoryCard data={categoryItem} key={categoryItem.id} />
              ))}
            </div>
            {/* <UserSideNav /> */}
          </div>
          {/* ======================Featured Categories Part End====================== */}

          {/* ======================Regular Products Part Start====================== */}
          <section>
            <div className="container">
              <div className="bg-gray-50 my-4">
                <div className="text-center mt-10 space-y-4">
                  <h2 className="font-bold text-xl sm:text-2xl">
                    Regular Products for Daily Shopping
                  </h2>
                  <p className="text-gray-primary text-sm sm:text-base max-w-2xl mx-auto">
                    See all our popular products in this week. You can choose
                    your daily needs products from this list and get some
                    special offer with free shipping.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 py-10">
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

          {/* ======================Regular Products Part End====================== */}

          {/* ======================Mobile Ads Banner Part Start====================== */}
        </div>
        <MobileAdsBanner />

        {/* ======================Mobile Ads Banner Part End====================== */}

        <section>
          <div className="container">
            <div className="bg-gray-50 my-4">
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
              <div className="py-10 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
      </main>
    </>
  );
};

export async function getServerSideProps(context) {
  let customer = await getCustomer(context);

  return { props: { customer } };
}

home.getLayout = (page) => {
  const customer = page.props.children.props.customer;
  return <CustomerLayout customer={customer}>{page}</CustomerLayout>;
};
export default home;
