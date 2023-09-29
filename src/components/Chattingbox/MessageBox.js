import React from "react";

const MessageBox = () => {
  return (
    <>
      <div className="message__box">
        <div className="message__box__wrapper">
          <div className="left__chatting__container">
            <div className="left__chatting">
              <div className="left__msg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae itaque amet soluta nesciunt ab, asperiores esse
                  explicabo iste non natus.
                </p>
              </div>
              <div className="left__msg__date">
                <span>an hours ago</span>
              </div>
            </div>
            <div className="left__chatting">
              <div className="left__img">
                <picture>
                  <img src="./assets/demo1.jpg" alt="message img" />
                </picture>
              </div>
              <div className="left__msg__date">
                <span>an hours ago</span>
              </div>
            </div>
            <div className="left__chatting">
              <div className="left__img">
                <picture>
                  <img src="./assets/demo2.jpg" alt="message img" />
                </picture>
              </div>
              <div className="left__msg__date">
                <span>an hours ago</span>
              </div>
            </div>
            <div className="left__chatting">
              <div className="left__audio">
                <audio controls></audio>
              </div>
              <div className="left__msg__date">
                <span>an hours ago</span>
              </div>
            </div>
          </div>
          <div className="right__chat__box"></div>
        </div>
      </div>
    </>
  );
};

export default MessageBox;
