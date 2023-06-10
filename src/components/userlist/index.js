import React from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@mui/material";

const Userlist = () => {
  return (
    <div className="userlist">
      <div className="userlist__header">
        <h4>User list</h4>
        <div className="userlist__searchBox">
          <AiOutlineSearch />
          <input
            type="text"
            name="userlist"
            id="userlist"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="userlist__body">
        <div className="userlist__wrapper">
          <div className="userlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="userlist__title">
            <h4>ls santo</h4>
          </div>
          <div className="userlist__btn">
            <Button variant="outlined">Add Friend</Button>
          </div>
        </div>
        <div className="userlist__wrapper">
          <div className="userlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="userlist__title">
            <h4>ls santo</h4>
          </div>
          <div className="userlist__btn">
            <Button variant="outlined">Add Friend</Button>
          </div>
        </div>
        <div className="userlist__wrapper">
          <div className="userlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="userlist__title">
            <h4>ls santo</h4>
          </div>
          <div className="userlist__btn">
            <Button variant="outlined">Add Friend</Button>
          </div>
        </div>
        <div className="userlist__wrapper">
          <div className="userlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="userlist__title">
            <h4>ls santo</h4>
          </div>
          <div className="userlist__btn">
            <Button variant="outlined">Add Friend</Button>
          </div>
        </div>
        <div className="userlist__wrapper">
          <div className="userlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="userlist__title">
            <h4>ls santo</h4>
          </div>
          <div className="userlist__btn">
            <Button variant="outlined">Add Friend</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
