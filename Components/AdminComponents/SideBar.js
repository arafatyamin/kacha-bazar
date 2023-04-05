import React from "react";

const SideBar = () => {
  return (
    <div className="w-[300px] h-screen static bg-red-300 left-0">
      {/* nav menu  */}
      <div className=" ">
        <div>
          <p>Company logo</p>
        </div>
        <ul>
          <li>Dashbord</li>
          <li>Products</li>
          <li>Category</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
