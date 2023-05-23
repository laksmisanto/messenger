import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsGear } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const SidebarIcon = () => {
  return (
    <>
      <div className="sidebar__icon__wrapper">
        <NavLink className="sidebar__icon" to={"/"}>
          <AiOutlineHome />
        </NavLink>
        <NavLink className="sidebar__icon" to={"/messages"}>
          <AiOutlineMessage />
        </NavLink>
        <NavLink className="sidebar__icon" to={"/notification"}>
          <MdOutlineNotificationsActive />
        </NavLink>
        <NavLink className="sidebar__icon" to={"/setting"}>
          <BsGear />
        </NavLink>
      </div>
    </>
  );
};

export default SidebarIcon;
