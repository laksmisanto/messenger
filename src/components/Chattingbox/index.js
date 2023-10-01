import React from "react";
import "./style.css";
import MessageBox from "./MessageBox";
import { GrEmoji } from "react-icons/gr";
import { BsCamera } from "react-icons/bs";
import { Button } from "@mui/material";

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
        <div className="chatting__box__footer">
          <div className="input__box">
            <input type="text" id="message" placeholder="Message" />
          </div>
          <div className="emoji">
            <GrEmoji />
          </div>
          <div className="camera">
            <BsCamera />
          </div>
          <div className="send__btn">
            <Button variant="contained">Send</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChattingBox;
