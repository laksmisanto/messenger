import React from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@mui/material";

const Friendlist = () => {
  return (
    <>
      <div className="friendlist">
        <div className="friendlist__header">
          <h4>Friend list</h4>
          <div className="friendlist__searchBox">
            <AiOutlineSearch />
            <input
              type="text"
              name="friendlist"
              id="friendlist"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="friendlist__body">
          <div className="friendlist__wrapper">
            <div className="friendlist__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="friendlist__title">
              <h4>laksmi santo</h4>
            </div>
            <div className="friendlist__btn">
              <Button variant="outlined">accept</Button>
              <Button variant="outlined" color="error">
                reject
              </Button>
            </div>
          </div>
          <div className="friendlist__wrapper">
            <div className="friendlist__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="friendlist__title">
              <h4>laksmi santo</h4>
            </div>
            <div className="friendlist__btn">
              <Button variant="outlined">accept</Button>
              <Button variant="outlined" color="error">
                reject
              </Button>
            </div>
          </div>
          <div className="friendlist__wrapper">
            <div className="friendlist__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="friendlist__title">
              <h4>laksmi santo</h4>
            </div>
            <div className="friendlist__btn">
              <Button variant="outlined">accept</Button>
              <Button variant="outlined" color="error">
                reject
              </Button>
            </div>
          </div>
          <div className="friendlist__wrapper">
            <div className="friendlist__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="friendlist__title">
              <h4>laksmi santo</h4>
            </div>
            <div className="friendlist__btn">
              <Button variant="outlined">accept</Button>
              <Button variant="outlined" color="error">
                reject
              </Button>
            </div>
          </div>
          <div className="friendlist__wrapper">
            <div className="friendlist__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="friendlist__title">
              <h4>laksmi santo</h4>
            </div>
            <div className="friendlist__btn">
              <Button variant="outlined">accept</Button>
              <Button variant="outlined" color="error">
                reject
              </Button>
            </div>
          </div>
          <div className="friendlist__wrapper">
            <div className="friendlist__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="friendlist__title">
              <h4>laksmi santo</h4>
            </div>
            <div className="friendlist__btn">
              <Button variant="outlined">accept</Button>
              <Button variant="outlined" color="error">
                reject
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friendlist;
