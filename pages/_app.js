import store from "@/store/store";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import Loading from "@/Components/CommonComponents/Loading/Loading";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <Provider store={store}>
      <Loading />
      <Component {...pageProps}> </Component>
    </Provider>
  );
}

App;
