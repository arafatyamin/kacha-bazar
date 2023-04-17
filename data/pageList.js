import { BiGift } from "react-icons/bi";
import { FaQuestionCircle } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { GrInfo } from "react-icons/gr";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdDoNotDisturbAlt, MdOutlineConnectWithoutContact, MdOutlinePrivacyTip } from "react-icons/md";

export const pageList = [
  { title: "Offers", link: "/offers", icon: BiGift },
  { title: "Checkout", link: "/checkout", icon: IoBagCheckOutline },
  { title: "FAQ", link: "/FAQ", icon: FaQuestionCircle },
  { title: "About Us", link: "/about-us", icon: GrInfo },
  {
    title: "Contact Us",
    link: "/contact-us",
    icon: MdOutlineConnectWithoutContact,
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
    icon: MdOutlinePrivacyTip,
  },
  {
    title: "Terms and Condition",
    link: "/terms-and-condition",
    icon: FiFileText,
  },
  { title: "Not Found", link: "/404", icon: MdDoNotDisturbAlt },
];