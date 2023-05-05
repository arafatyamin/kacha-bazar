import React from "react";
import withAuth from "../auth/withAuth";

const ProtectedLayout = ({ children }) => {
  return <>{children}</>;
};

// export default withAuth(ProtectedLayout);
export default ProtectedLayout;
