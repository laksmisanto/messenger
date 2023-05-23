import React from "react";
import SidebarIcon from "./SidebarIcon";
import { GoSignOut } from "react-icons/go";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./style.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar__container">
        <div className="sidebar__profile__info">
          <div className="profile__image">
            <picture>
              <img src="/assets/profile.jpg" alt="profile__image" />
            </picture>
            <div className="profile__overlay">
              <AiOutlineCloudUpload />
            </div>
          </div>
          <h4 className="profile__name">laksmi santo</h4>
        </div>
        <div className="sidebar__menu__icon">
          <SidebarIcon />
        </div>
        <div className="profile__logout">
          <div className="profile__logout__icon">
            <GoSignOut />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
