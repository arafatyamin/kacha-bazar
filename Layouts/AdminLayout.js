import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <h2>Admin Header</h2>
      {children}
      <h2>Admin Footer</h2>
    </div>
  );
};

export default AdminLayout;
