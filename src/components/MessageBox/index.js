import React from "react";
import "./style.css";

const MessageBox = () => {
  return (
    <>
      <div className="message__box__container">
        <div className="message__box__header">
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
        <div className="message__box__body">
          <div className="message__box__wrapper">body</div>
        </div>
        <div className="message__box__footer">footer</div>
      </div>
    </>
  );
};

export default MessageBox;
