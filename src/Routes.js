import { MdDashboard } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaSignal } from "react-icons/fa";

export const topbarUnAuthRoutes = [
  {
    path: "/login",
    name: "Login",
    Icon: IoMdLogIn
  }
];
export const topbarAuthRoutes = [
  {
    path: "/notifications",
    name: "Notifications",
    Icon: MdNotifications
  },
  {
    path: "/settings",
    name: "Settings",
    Icon: MdSettings
  }
];

export const sidebarUnAuthRoutes = [
  {
    path: "/login",
    name: "Login",
    Icon: IoMdLogIn
  }
];
export const sidebarAuthRoutes = [
  {
    path: "/dashboard",
    name: "Tables",
    Icon: MdDashboard
  },
  {
    path: "/profile",
    name: "Profile",
    Icon: MdPerson
  },
  {
    path: "/settings",
    name: "Settings",
    Icon: MdSettings
  },
  {
    path: "/notifications",
    name: "Notifications",
    Icon: MdNotifications
  },
  {
    path: "/login",
    name: "Login",
    Icon: IoMdLogIn
  }
];
