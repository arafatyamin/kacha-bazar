import React from "react";
import withOutAuth from "../auth/withOutAuth";

const NonPortectedLayout = ({ children }) => {
  return <>{children}</>;
};

// export default withOutAuth(NonPortectedLayout);
export default NonPortectedLayout;
