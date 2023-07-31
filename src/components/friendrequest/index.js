import React, { useEffect, useState } from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@mui/material";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { useSelector } from "react-redux";

const Friendrequest = () => {
  const db = getDatabase();
  const [frndReq, setFrndReq] = useState([]);
  const user = useSelector((users) => users.login.loggedIn);

  // show friend request
  useEffect(() => {
    const starCountRef = ref(db, "friendrequest/");
    onValue(starCountRef, (snapshot) => {
      let reqArr = [];
      snapshot.forEach((item) => {
        if (item.val().reciverid == user.uid) {
          reqArr.push({ ...item.val(), id: item.key });
        }
      });
      setFrndReq(reqArr);
    });
  }, []);

  //Accept friends request
  const handleAcceptReq = (item) => {
    set(push(ref(db, "friends")), {
      ...item,
    }).then(() => {
      remove(ref(db, "friendrequest/" + item.id));
    });
  };

  // Friends Request Reject
  const handleReqReject = (item) => {
    remove(ref(db, "friendrequest/" + item.id));
  };

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
          {frndReq.map((item, i) => (
            <div className="friendlist__wrapper" key={i}>
              <div className="friendlist__img">
                <picture>
                  <img src="./assets/avatar.png" alt="avatar" />
                </picture>
              </div>
              <div className="friendlist__title">
                <h4>{item.sendername}</h4>
              </div>
              <div className="friendlist__btn">
                <Button
                  variant="outlined"
                  onClick={() => handleAcceptReq(item)}
                >
                  accept
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleReqReject(item)}
                >
                  reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Friendrequest;
