import React, { useState } from "react";
import SidebarIcon from "./SidebarIcon";
import { GoSignOut } from "react-icons/go";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./style.css";
import { getAuth, signOut } from "firebase/auth";
import { Loginusers } from "../../feature/slice/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modals from "../modal";

const Sidebar = () => {
  const auth = getAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const user = useSelector((users) => users.login.loggedIn);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("users");
        dispatch(Loginusers(null));
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="sidebar__container">
        <div className="sidebar__profile__info">
          <div className="profile__image" onClick={handleOpen}>
            <picture>
              {user.photoURL ? (
                <img src={user.photoURL} alt="profile__image" />
              ) : (
                <img src="/assets/avatar.jpg" alt="profile__image" />
              )}
            </picture>
            <div className="profile__overlay">
              <AiOutlineCloudUpload />
            </div>
          </div>
          <h4 className="profile__name">{user.displayName}</h4>
        </div>
        <div className="sidebar__menu__icon">
          <SidebarIcon />
        </div>
        <div className="profile__logout">
          <div className="profile__logout__icon" onClick={handleLogout}>
            <GoSignOut />
          </div>
        </div>
        <Modals open={open} setOpen={setOpen} />
      </div>
    </>
  );
};

export default Sidebar;
