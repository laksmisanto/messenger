import React from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@mui/material";

const Blockeduser = () => {
  return (
    <div className="blockedlist">
      <div className="blockedlist__header">
        <h4>Blocked list</h4>
        <div className="blockedlist__searchBox">
          <AiOutlineSearch />
          <input
            type="text"
            name="blockedlist"
            id="blockedlist"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="blockedlist__body">
        <div className="blockedlist__wrapper">
          <div className="blockedlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="blockedlist__title">
            <h4>laksmi santo</h4>
          </div>
          <div className="blockedlist__btn">
            <Button variant="outlined">Unblock</Button>
          </div>
        </div>
        <div className="blockedlist__wrapper">
          <div className="blockedlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="blockedlist__title">
            <h4>laksmi santo</h4>
          </div>
          <div className="blockedlist__btn">
            <Button variant="outlined">Unblock</Button>
          </div>
        </div>
        <div className="blockedlist__wrapper">
          <div className="blockedlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="blockedlist__title">
            <h4>laksmi santo</h4>
          </div>
          <div className="blockedlist__btn">
            <Button variant="outlined">Unblock</Button>
          </div>
        </div>
        <div className="blockedlist__wrapper">
          <div className="blockedlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="blockedlist__title">
            <h4>laksmi santo</h4>
          </div>
          <div className="blockedlist__btn">
            <Button variant="outlined">Unblock</Button>
          </div>
        </div>
        <div className="blockedlist__wrapper">
          <div className="blockedlist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="blockedlist__title">
            <h4>laksmi santo</h4>
          </div>
          <div className="blockedlist__btn">
            <Button variant="outlined">Unblock</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blockeduser;
