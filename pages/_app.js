import store from "@/store/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
      <Toaster position="top-center" />
    </Provider>
  );
}

App;
