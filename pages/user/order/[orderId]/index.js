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
      <main>
        <h1>Order Page: {orderId}</h1>
      </main>
    </>
  );
};

export default OrderDetailsPage;
