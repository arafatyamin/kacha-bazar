import Link from "next/link";
import { AiOutlineUnlock, AiOutlineUnorderedList } from "react-icons/ai";
import { RxDashboard, RxGear } from "react-icons/rx";
import { HiOutlineClipboardList } from "react-icons/hi";

const userSideNavItems = [
  {
    _id: "1",
    title: "Dashboard",
    icon: <RxDashboard />,
    link: "/user",
  },
  {
    _id: "2",
    title: "My Orders",
    icon: <AiOutlineUnorderedList />,
    link: "/user/order",
  },
  {
    _id: "3",
    title: "Update Profile",
    icon: <RxGear />,
    link: "/user/update-profile",
  },
  {
    _id: "4",
    title: "Change Password",
    icon: <HiOutlineClipboardList />,
    link: "/user/change-password",
  },
  {
    _id: "5",
    title: "Log Out",
    icon: <AiOutlineUnlock />,
    link: "#",
  },
];

const UserSideNav = () => {
  return (
    <div className="flex flex-col gap-3">
      {userSideNavItems?.map((userSideNavItem) => {
        const { _id, title, icon, link } = userSideNavItem;
        return (
          <Link
            href={link}
            key={_id}
            className="flex items-center gap-2 hover:text-primary p-2 cursor-pointer"
          >
            {icon} {title}
          </Link>
        );
      })}
    </div>
  );
};

export default UserSideNav;
