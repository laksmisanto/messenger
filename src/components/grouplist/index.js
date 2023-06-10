import React from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@mui/material";

const Grouplist = () => {
  return (
    <div className="grouplist">
      <div className="grouplist__header">
        <h4>Group list</h4>
        <div className="grouplist__searchBox">
          <AiOutlineSearch />
          <input
            type="text"
            name="grouplist"
            id="grouplist"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="grouplist__body">
        <div className="grouplist__wrapper">
          <div className="grouplist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="grouplist__title">
            <h4>MERN soldier</h4>
            <span>Thinks twis code once!</span>
          </div>
          <div className="grouplist__btn">
            <Button variant="outlined">Join</Button>
          </div>
        </div>
        <div className="grouplist__wrapper">
          <div className="grouplist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="grouplist__title">
            <h4>MERN soldier</h4>
            <span>Thinks twis code once!</span>
          </div>
          <div className="grouplist__btn">
            <Button variant="outlined">Join</Button>
          </div>
        </div>
        <div className="grouplist__wrapper">
          <div className="grouplist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="grouplist__title">
            <h4>MERN soldier</h4>
            <span>Thinks twis code once!</span>
          </div>
          <div className="grouplist__btn">
            <Button variant="outlined">Join</Button>
          </div>
        </div>
        <div className="grouplist__wrapper">
          <div className="grouplist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="grouplist__title">
            <h4>MERN soldier</h4>
            <span>Thinks twis code once!</span>
          </div>
          <div className="grouplist__btn">
            <Button variant="outlined">Join</Button>
          </div>
        </div>
        <div className="grouplist__wrapper">
          <div className="grouplist__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="grouplist__title">
            <h4>MERN soldier</h4>
            <span>Thinks twis code once!</span>
          </div>
          <div className="grouplist__btn">
            <Button variant="outlined">Join</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grouplist;
