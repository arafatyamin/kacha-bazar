import MobileAdsBanner from "@/Components/CommonComponents/MobileAdsBanner/MobileAdsBanner";
import CustomerLayout from "@/Layouts/CustomerLayout";
import OfferCard from "../../Components/CustomerComponents/OfferPage/OfferCard";

const offerPage = () => {
    return (
      <div className="mx-auto max-w-screen-2xl px-4 py-10 lg:py-20 sm:px-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <OfferCard
            title="Card Title"
            categories="Grocery"
            discount="15"
            shippingCost="500"
            couponCode="SUMMER21"
            status="Active"
            imageUrl="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F23kQcB9%2Fins3.jpg&w=128&q=75"
            validity={"1h"}
          />
          <OfferCard
            title="Card Title"
            categories="Cloths"
            discount="12"
            shippingCost="1500"
            couponCode="SUMMER21"
            status="Active"
            imageUrl="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FPDLPDHc%2Fins1.jpg&w=128&q=75"
            validity={"2h"}
          />
          <OfferCard
            title="Another Card Title"
            categories="Cloths"
            discount="13"
            shippingCost="500"
            couponCode="AUGUST21"
            status="Inactive"
            imageUrl="https://images.immediate.co.uk/production/volatile/sites/30/2023/02/Bowl-of-fruit-5155e6f.jpg?quality=90&resize=768,574"
            validity={"1d"}
          />
          <OfferCard
            title="Another Card Title"
            categories="Grocery"
            discount="12"
            shippingCost="1000"
            couponCode="WINTER21"
            status="Inactive"
            imageUrl="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2F4thS4Z1%2Fins2.jpg&w=128&q=75"
            validity={"2d"}
          />
        </div>

        {/* mobile add banner */}
        <MobileAdsBanner></MobileAdsBanner>
      </div>
    );
};
offerPage.getLayout = (page) => {   return <CustomerLayout>{page}</CustomerLayout>; };
export default offerPage;