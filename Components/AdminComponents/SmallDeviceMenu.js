// import { motion } from "framer-motion";
// import Link from "next/link";
// import React, { useState } from "react";
// import { RxDashboard } from "react-icons/rx";
// import { RiShoppingBag3Fill } from "react-icons/ri";
// import {
//   AiOutlineBars,
//   AiOutlineShoppingCart,
//   AiOutlineGift,
//   AiOutlineLogout,
// } from "react-icons/ai";
// import { FiUsers } from "react-icons/fi";
// import { BiUser } from "react-icons/bi";
// import { FiSettings } from "react-icons/fi";

// const SmallDeviceMenu = () => {
//   const [isActive, setIsActive] = useState("dashbord");

//   const sideNavItem = [
//     {
//       name: "dashbord",
//       icon: <RxDashboard />,
//       link: "../admin/dashbord",
//     },
//     {
//       name: "products",
//       icon: <RiShoppingBag3Fill />,
//       link: "../admin/products",
//     },
//     {
//       name: "category",
//       icon: <AiOutlineBars />,
//       link: "../admin/category",
//     },
//     {
//       name: "customers",
//       icon: <FiUsers />,
//       link: "../admin/customers",
//     },
//     {
//       name: "orders",
//       icon: <AiOutlineShoppingCart />,
//       link: "../admin/orders",
//     },
//     {
//       name: "coupons",
//       icon: <AiOutlineGift />,
//       link: "../admin/coupons",
//     },
//     {
//       name: "our staff",
//       icon: <BiUser />,
//       link: "../admin/ourStaff",
//     },
//     {
//       name: "setting",
//       icon: <FiSettings />,
//       link: "../admin/setting",
//     },
//   ];

//   return (
//     <div className="w-full flex">
//       <div className="w-[250px] ">
//         {/* nav menu  */}
//         <div className="bg-white shadow-md left-0 w-[250px] h-screen">
//           <div className=" flex p-5 items-center">
//             <img className="w-[120px]" src="/images/logo.svg" alt="Logo" />
//           </div>

//           {/* menu item  */}
//           <div className="text-md font-semibold ">
//             {sideNavItem?.map((item) => {
//               const { name, icon, link } = item || {};
//               return (
//                 <Link key={name} href={link}>
//                   <button
//                     onClick={() => setIsActive(name)}
//                     className={`w-full  relative flex items-center px-6 py-3 duration-300 hover:bg-gray-100 hover:text-[#0b9768] ${
//                       isActive === name &&
//                       "text-[#0E9F6E] hover:text-[#0b9768] "
//                     } `}
//                   >
//                     {icon}
//                     {/* <{icon} className="mr-4" /> */}
//                     <span className="ml-4 capitalize">{name}</span>
//                     {isActive === name && (
//                       <span className="absolute rounded-r-md left-0 h-full border-l-4 border-[#0E9F6E] "></span>
//                     )}
//                   </button>
//                 </Link>
//               );
//             })}
//           </div>

//           {/* logout button  */}
//           <div className="absolute bottom-44 left-0 w-full ">
//             <div className=" flex justify-center items-center ">
//               <button className="flex items-center px-14 py-2 rounded-lg font-semibold duration-300 hover:bg-[#016a47] text-white bg-[#0E9F6E] ">
//                 <AiOutlineLogout className="mr-2" />
//                 <span className="">Log Out</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full bg-blue-500 h-screen">hii</div>
//     </div>
//   );
// };

// export default SmallDeviceMenu;
