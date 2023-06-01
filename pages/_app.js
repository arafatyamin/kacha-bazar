import store from "@/store/store";
import { Provider, useDispatch } from "react-redux";
import { SessionProvider, useSession } from "next-auth/react";
import "@/styles/globals.css";
import Loading from "@/Components/CommonComponents/Loading/Loading";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Loading />
        <Component {...pageProps}></Component>
        <Toaster position="top-center" />
        <SessionStore />
      </Provider>
    </SessionProvider>
  );
}

const SessionStore = (props) => {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();

  useEffect(() => {
    if ((status !== "loading") & (status === "authenticated")) {
      dispatch({
        type: "UPDATE_USER",
        user: session.user,
      });
    }
  }, [session, status]);

  return <></>;
};
