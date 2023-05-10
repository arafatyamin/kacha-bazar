import store from "@/store/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps}> </Component>
    </Provider>
  );
}

App;
