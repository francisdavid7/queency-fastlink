import { TbLayoutDashboard } from "react-icons/tb";
import { FaRegFileAlt } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { Link, NavLink } from "react-router";
import { useMenuContext } from "../../Context/MenuContext";

const Sidebar = () => {
  const { colorMode } = useContext(ThemeContext);
  const { activeMenu, setActiveMenu } = useMenuContext();

  const activeLink =
    "flex items-center gap-2 text-lg py-2 px-8 surface-color-hover rounded-lg mb-4";
  const normalLink =
    "flex items-center gap-2 text-lg py-2 px-8 surface-hover rounded-lg mb-4";

  return (
    <aside
      className={
        activeMenu
          ? "left-0 bg-color lg:col-span-1 flex flex-col fixed min-h-screen lg:w-[20%] z-10 transition"
          : "-left-full lg:left-0 lg:col-span-1 lg:flex lg:flex-col fixed min-h-screen lg:w-[20%] z-10 transition"
      }
    >
      {/* Aside header */}
      <div className="p-6 pl-14 border-color border-b">
        {colorMode === "light" ? (
          <img src="./logo-light.png" width={100} />
        ) : (
          <img src="./logo-dark.png" width={100} />
        )}

        <span
          onClick={() => setActiveMenu((prev) => !prev)}
          className="lg:hidden absolute top-7 right-1.5 text-2xl mr-5 cursor-pointer"
        >
          <IoCloseCircleOutline />
        </span>
      </div>

      <ul className="p-6 flex-1">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <span className="col text-xlg">
            <TbLayoutDashboard />
          </span>
          Dashboard
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <span className="col text-xlg">
            <FaRegFileAlt />
          </span>
          Courses
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <span className="col text-xlg">
            <VscSettings />
          </span>
          Settings
        </NavLink>
      </ul>

      <div className="p-6">
        <li className="flex items-center gap-2 text-lg py-2 px-8 surface-hover rounded-lg mb-4 cursor-pointer">
          <span className="col text-xlg">
            <IoIosLogOut />
          </span>
          Log Out
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
