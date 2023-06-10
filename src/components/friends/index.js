import React from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@mui/material";

const Friends = () => {
  return (
    <div className="friends">
      <div className="friends__header">
        <h4>friends</h4>
        <div className="friends__searchBox">
          <AiOutlineSearch />
          <input
            type="text"
            name="friends"
            id="friends"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="friends__body">
        <div className="friends__wrapper">
          <div className="friends__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="friends__title">
            <h4>prrionti</h4>
          </div>
          <div className="friends__btn">
            <Button variant="outlined" color="error">
              block
            </Button>
          </div>
        </div>
        <div className="friends__wrapper">
          <div className="friends__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="friends__title">
            <h4>prrionti</h4>
          </div>
          <div className="friends__btn">
            <Button variant="outlined" color="error">
              block
            </Button>
          </div>
        </div>
        <div className="friends__wrapper">
          <div className="friends__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="friends__title">
            <h4>prrionti</h4>
          </div>
          <div className="friends__btn">
            <Button variant="outlined" color="error">
              block
            </Button>
          </div>
        </div>
        <div className="friends__wrapper">
          <div className="friends__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="friends__title">
            <h4>prrionti</h4>
          </div>
          <div className="friends__btn">
            <Button variant="outlined" color="error">
              block
            </Button>
          </div>
        </div>
        <div className="friends__wrapper">
          <div className="friends__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="friends__title">
            <h4>prrionti</h4>
          </div>
          <div className="friends__btn">
            <Button variant="outlined" color="error">
              block
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
