import Layout from "@/Layouts/Layout";
import "@/styles/globals.css";

// const layouts = {
//   customer: CustomerLayout,
//   admin: AdminLayout,
// };

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

App;
