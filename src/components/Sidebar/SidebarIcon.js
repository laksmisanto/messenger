import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsGear } from "react-icons/bs";

const SidebarIcon = () => {
  return (
    <>
      <div className="sidebar__items">
        <AiOutlineHome />
      </div>
      <div className="sidebar__items">
        <AiOutlineMessage />
      </div>
      <div className="sidebar__items">
        <MdOutlineNotificationsActive />
      </div>
      <div className="sidebar__items">
        <BsGear />
      </div>
    </>
  );
};

export default SidebarIcon;
