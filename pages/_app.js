import AdminLayout from "@/Layouts/AdminLayouts/AdminLayout";
import CustomerLayout from "@/Layouts/CustomerLayouts/CustomerLayout";
import "@/styles/globals.css";

const layouts = {
  customer: CustomerLayout,
  admin: AdminLayout,
};

function App({ Component, pageProps }) {
  const Layout =
    layouts[Component.layout] ||
    function (children) {
      return <>{children}</>;
    };

  return (
    <Layout {...pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
