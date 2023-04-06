import CustomerFooter from "@/Components/CustomerComponents/CustomerFooter/CustomerFooter";
import OfferPage from "@/Components/CustomerComponents/Offer/OfferPage";
import Head from "next/head";

const home = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <OfferPage></OfferPage>
        <CustomerFooter></CustomerFooter>
      </main>
    </>
  );
};

export default home;
