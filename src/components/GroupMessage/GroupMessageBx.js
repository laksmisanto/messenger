import { Button } from "@mui/material";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";

const GroupMessageBx = () => {
  return (
    <>
      <div className="msg__grouplist">
        <div className="msg__grouplist__header">
          <h4>Group list</h4>
          <div className="msg__grouplist__search__create">
            <div className="msg__grouplist__searchBox">
              <AiOutlineSearch />
              <input
                type="text"
                name="grouplist"
                id="grouplist"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        <div className="msg__grouplist__body">
          <div className="msg__grouplist__wrapper">
            <div className="msg__grouplist__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="msg__grouplist__title">
              <h4>CSE Info</h4>
              <span>cse education information</span>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupMessageBx;
