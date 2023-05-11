import store from "@/store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import Loading from "@/Components/CommonComponents/Loading/Loading";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
            <Loading />
        <Component {...pageProps}> </Component>
      </Provider>
    </SessionProvider>
  );
}

App;
