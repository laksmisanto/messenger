import React from "react";
import "./style.css";
import MessageBox from "./MessageBox";

const ChattingBox = () => {
  return (
    <>
      <div className="chatting__box__container">
        <div className="chatting__box__header">
          <div className="message__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="author__info">
            <h4>laksmi santo</h4>
            <p>active</p>
          </div>
        </div>
        <div className="chatting__box__body">
          <div className="chatting__box__wrapper">
            <MessageBox />
          </div>
        </div>
        <div className="chatting__box__footer">footer</div>
      </div>
    </>
  );
};

export default ChattingBox;
