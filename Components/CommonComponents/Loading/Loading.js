import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Zoom } from "react-preloaders2";

const Loading = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleRouteChangeStart = () => setIsLoading(true);
    const handleRouteComplete = () => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
      document.body.style.position = "relative";
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteComplete);
    };
  }, []);
  return (
    <React.Fragment>{isLoading && <Zoom color={"#10b981"} />}</React.Fragment>
  );
};

export default Loading;
