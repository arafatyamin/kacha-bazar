import InvoiceFooter from "@/Components/CustomerComponents/Invoice/InvoiceFooter";
import InvoiceHeader from "@/Components/CustomerComponents/Invoice/InvoiceHeader";
import Head from "next/head";
import { useRouter } from "next/router";

const OrderDetailsPage = () => {
  const { query } = useRouter();
  const { orderId } = query;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Order Page</title>
      </Head>
      <main className="bg-gray-100 mt-10 w-11/12 xl:w-9/12 mx-auto">
        {/* <h1>Order Page: {orderId}</h1> */}
        <p className="bg-green-200 mb-8 p-3 rounded-lg">
          Thank you{" "}
          <span className="text-green-600 font-bold ">eurtr trut,</span> Your
          order have been received !
        </p>

        <section className="bg-white">
          <InvoiceHeader />
          <InvoiceFooter />
        </section>
      </main>
    </>
  );
};

export default OrderDetailsPage;
