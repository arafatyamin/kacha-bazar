import Link from "next/link";
import { AiOutlineUnlock, AiOutlineUnorderedList } from "react-icons/ai";
import { RxDashboard, RxGear } from "react-icons/rx";
import { HiOutlineClipboardList } from "react-icons/hi";
import axios from "axios";
import { useRouter } from "next/router";

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
];

const UserSideNav = () => {
  const router = useRouter();

  const logOut = async () => {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/logout",
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      if (typeof window !== "undefined") {
        router.push("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
      <Link
        href={"#"}
        key={"43"}
        onClick={logOut}
        className="flex items-center gap-2 hover:text-primary p-2 cursor-pointer"
      >
        <AiOutlineUnlock /> Log Out
      </Link>
    </div>
  );
};

export default UserSideNav;
