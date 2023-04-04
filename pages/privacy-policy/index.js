import PageHeader from "@/Components/CommonComponents/PageHeader/PageHeader";
import Head from "next/head";
import CustomerLayout from "@/Layouts/CustomerLayout";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy & Policy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <PageHeader title={"Privacy & Policy"} />
        <section>
          <div className="container mx-auto px-3">
            <h1>Privacy Policy Page</h1>
          </div>
        </section>
      </main>
    </>
  );
};

PrivacyPolicy.getLayout = (page) => {
  return <CustomerLayout>{page}</CustomerLayout>;
};

export default PrivacyPolicy;
