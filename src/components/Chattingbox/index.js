import React, { useEffect, useState } from "react";
import "./style.css";
import MessageBox from "./MessageBox";
import { GrEmoji } from "react-icons/gr";
import { BsCamera } from "react-icons/bs";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const ChattingBox = () => {
  const activeChat = useSelector((state) => state.active.activeState);
  const user = useSelector((users) => users.login.loggedIn);
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const db = getDatabase();

  const handleMsgSend = () => {
    if (activeChat?.status === "single") {
      set(push(ref(db, "singleMsg")), {
        whosendid: user.uid,
        whosendname: user.displayName,
        whoreceiveid: activeChat?.id,
        whoreceivename: activeChat?.name,
        msg: msg,
        date: `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}`,
      }).then(() => {
        setMsg("");
      });
    } else {
      console.log("group message");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key == "Enter") {
      handleMsgSend();
    }
  };

  useEffect(() => {
    const starCountRef = ref(db, "singleMsg");
    onValue(starCountRef, (snapshot) => {
      let msgArr = [];
      snapshot.forEach((item) => {
        if (
          (item.val().whosendid == user.uid &&
            item.val().whoreceiveid == activeChat?.id) ||
          (item.val().whosendid == activeChat?.id &&
            item.val().whoreceiveid == user.uid)
        ) {
          msgArr.push(item.val());
        }
        // logic error your if condition is not working
        // msgArr.push(item.val());
      });
      setMsgList(msgArr);
    });
  }, [activeChat?.id]);

  console.log("Message List", msgList);

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
            <h4>{activeChat?.name}</h4>
            <p>active</p>
          </div>
        </div>
        <div className="chatting__box__body">
          <div className="chatting__box__wrapper">
            <MessageBox msgList={msgList} />
          </div>
        </div>
        <div className="chatting__box__footer">
          <div className="input__box">
            <input
              type="text"
              id="message"
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyUp={handleEnterPress}
            />
          </div>
          <div className="emoji">
            <GrEmoji />
          </div>
          <div className="camera">
            <BsCamera />
          </div>
          <div className="send__btn">
            <Button variant="contained" onClick={handleMsgSend}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChattingBox;
