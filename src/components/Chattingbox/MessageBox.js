import { getDatabase, onValue, ref } from "firebase/database";
import moment from "moment/moment";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ModalImage from "react-modal-image";

const MessageBox = ({ msgList, groupMsgList }) => {
  const user = useSelector((users) => users.login.loggedIn);
  const activeChat = useSelector((state) => state.active.activeState);
  const db = getDatabase();
  const [groupMemberList, setGroupMemberList] = useState([]);

  const scrollMsg = useRef(null);

  useEffect(() => {
    scrollMsg?.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgList]);

  useEffect(() => {
    const starCountRef = ref(db, "groupmembers");
    onValue(starCountRef, (snapshot) => {
      let memberList = [];
      snapshot.forEach((item) => {
        if (item.val().groupid + item.val().userid) {
          memberList.push(item.val());
        }
      });
      setGroupMemberList(memberList);
    });
  }, []);

  return (
    <>
      <div className="message__box">
        <div className="message__box__wrapper ">
          {activeChat?.status == "single"
            ? msgList.map((item, i) => (
                <div key={i} ref={scrollMsg}>
                  {item.whosendid == user.uid ? (
                    item.msg ? (
                      <>
                        <div className="right__chatting">
                          <div className="right__msg">
                            <p>{item.msg}</p>
                          </div>
                          <div className="right__msg__date">
                            <span>
                              {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                            </span>
                          </div>
                        </div>
                      </>
                    ) : item.img ? (
                      <div className="right__chatting">
                        <div className="right__img">
                          <picture>
                            <ModalImage small={item.img} large={item.img} />
                          </picture>
                        </div>
                        <div className="right__msg__date">
                          <span>
                            {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="right__chatting">
                        <div className="right__audio">
                          <audio controls src={item.audio}></audio>
                        </div>
                        <div className="right__msg__date">
                          <span>
                            {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                          </span>
                        </div>
                      </div>
                    )
                  ) : item.msg ? (
                    <>
                      <div className="left__chatting">
                        <div className="left__msg">
                          <p>{item.msg}</p>
                        </div>
                        <div className="left__msg__date">
                          <span>
                            {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : item.img ? (
                    <>
                      <div className="left__chatting">
                        <div className="left__img">
                          <picture>
                            <ModalImage small={item.img} large={item.img} />
                          </picture>
                        </div>
                        <div className="left__msg__date">
                          <span>
                            {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                          </span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="left__chatting">
                      <div className="left__audio">
                        <audio controls src={item.audio}></audio>
                      </div>
                      <div className="left__msg__date">
                        <span>
                          {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              ))
            : user?.uid == activeChat?.adminid ||
              groupMemberList.includes(activeChat?.id + user.uid)
            ? groupMsgList.map((item, i) => (
                <div key={i}>
                  {item.whosendid == user.uid
                    ? item.whoreceiveid == activeChat?.id && (
                        <div className="right__chatting">
                          <div className="right__msg">
                            <p>{item.msg}</p>
                          </div>
                          <div className="right__msg__date">
                            <span>
                              {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                            </span>
                          </div>
                        </div>
                      )
                    : item.whoreceiveid == activeChat?.id && (
                        <div className="left__chatting">
                          <div className="left__msg">
                            <p>{item.msg}</p>
                          </div>
                          <div className="left__msg__date">
                            <span>
                              {moment(item.date, "YYYYMMDD hh:mm").fromNow()}
                            </span>
                          </div>
                        </div>
                      )}
                </div>
              ))
            : "tui nai vai"}

          {/* <div className="left__chatting">
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
          <div className="right__chatting">
            <div className="right__msg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae itaque amet soluta nesciunt ab, asperiores esse
                explicabo iste non natus.
              </p>
            </div>
            <div className="right__msg__date">
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
          <div className="right__chatting">
            <div className="right__audio">
              <audio controls></audio>
            </div>
            <div className="right__msg__date">
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
          <div className="right__chatting">
            <div className="right__img">
              <picture>
                <img src="./assets/demo1.jpg" alt="message img" />
              </picture>
            </div>
            <div className="right__msg__date">
              <span>an hours ago</span>
            </div>
          </div>
          <div className="right__chatting">
            <div className="right__img">
              <picture>
                <img src="./assets/demo2.jpg" alt="message img" />
              </picture>
            </div>
            <div className="right__msg__date">
              <span>an hours ago</span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MessageBox;
