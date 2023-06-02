import MobileAdsBanner from "@/Components/CommonComponents/MobileAdsBanner/MobileAdsBanner";
import CustomerLayout from "@/Layouts/CustomerLayout";
import OfferCard from "../../Components/CustomerComponents/OfferPage/OfferCard";
import handleStatus from "@/auth/handleStatus";
import { useEffect, useState } from "react";
import axios from "axios";

const offerPage = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    getCoupons();
  }, []);

  const getCoupons = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          "/admin/coupons?page=1&limit=10"
      );
      setCoupons(response.data.data.coupons);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full">
      <div
        div
        style={{
          backgroundImage: `url("https://kachabazar-store.vercel.app/page-header-bg.jpg")`,
        }}
        className="flex justify-center bg-indigo-100 bg-cover bg-no-repeat bg-bottom w-full py-10 lg:py-20"
      >
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">
          Mega Offer
        </h1>
      </div>
      <section className="my-8">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {coupons?.map((coupon) => (
              <OfferCard coupon={coupon} />
            ))}
          </div>
        </div>
        <MobileAdsBanner></MobileAdsBanner>
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  return await handleStatus(context);
}

offerPage.getLayout = (page) => {
  const loggedIn = page.props.children.props.children[1].props.loggedIn;
  return <CustomerLayout loggedIn={loggedIn}>{page}</CustomerLayout>;
};
export default offerPage;
