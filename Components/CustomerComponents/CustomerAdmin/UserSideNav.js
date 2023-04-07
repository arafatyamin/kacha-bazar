import Link from "next/link";
import { AiOutlineUnlock, AiOutlineUnorderedList } from "react-icons/ai";
import { RxDashboard, RxGear } from "react-icons/rx";
import { HiOutlineClipboardList } from "react-icons/hi";

const userSideNavItems = [
  {
    _id: "1",
    title: "Dashboard",
    icon: <RxDashboard />,
    link: "#",
  },
  {
    _id: "2",
    title: "My Orders",
    icon: <AiOutlineUnorderedList />,
    link: "#",
  },
  {
    _id: "3",
    title: "Update Profile",
    icon: <RxGear />,
    link: "#",
  },
  {
    _id: "4",
    title: "Change Password",
    icon: <HiOutlineClipboardList />,
    link: "#",
  },
  {
    _id: "5",
    title: "Log Out",
    icon: <AiOutlineUnlock />,
    link: "#",
  },
];

const UserSideNav = ({ setNavbarValue }) => {
  return (
    <div className="flex flex-col gap-3">
      {userSideNavItems?.map((userSideNavItem) => {
        const { _id, title, icon, link } = userSideNavItem;
        return (
          <p
            key={_id}
            className="flex items-center gap-2 hover:text-primary px-2 py-3 cursor-pointer"
            onClick={(e) => setNavbarValue(e.target.innerText.toLowerCase())}
          >
            {icon} {title}
          </p>
        );
      })}
    </div>
  );
};

export default UserSideNav;
