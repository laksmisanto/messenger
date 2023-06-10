import React from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";

const Groups = () => {
  return (
    <div className="mygroups">
      <div className="mygroups__header">
        <h4>My Groups</h4>
        <div className="mygroups__searchBox">
          <AiOutlineSearch />
          <input
            type="text"
            name="mygroups"
            id="mygroups"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="mygroups__body">
        <div className="mygroups__wrapper">
          <div className="mygroups__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="mygroups__title">
            <h4>MERN soldier</h4>
            <span>laksmi santo</span>
          </div>
          <div className="mygroups__date">
            <p>created</p>
            <span>02/06/2023</span>
          </div>
        </div>
        <div className="mygroups__wrapper">
          <div className="mygroups__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="mygroups__title">
            <h4>MERN soldier</h4>
            <span>laksmi santo</span>
          </div>
          <div className="mygroups__date">
            <p>created</p>
            <span>02/06/2023</span>
          </div>
        </div>
        <div className="mygroups__wrapper">
          <div className="mygroups__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="mygroups__title">
            <h4>MERN soldier</h4>
            <span>laksmi santo</span>
          </div>
          <div className="mygroups__date">
            <p>created</p>
            <span>02/06/2023</span>
          </div>
        </div>
        <div className="mygroups__wrapper">
          <div className="mygroups__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="mygroups__title">
            <h4>MERN soldier</h4>
            <span>laksmi santo</span>
          </div>
          <div className="mygroups__date">
            <p>created</p>
            <span>02/06/2023</span>
          </div>
        </div>
        <div className="mygroups__wrapper">
          <div className="mygroups__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="mygroups__title">
            <h4>MERN soldier</h4>
            <span>laksmi santo</span>
          </div>
          <div className="mygroups__date">
            <p>created</p>
            <span>02/06/2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groups;
