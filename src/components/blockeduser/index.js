import React, { useEffect, useState } from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "@mui/material";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";

const Blockeduser = () => {
  const db = getDatabase();
  const [blockedlist, setBlockedlist] = useState([]);
  const user = useSelector((users) => users.login.loggedIn);

  // show friends block list
  useEffect(() => {
    const starCountRef = ref(db, "block");
    onValue(starCountRef, (snapshot) => {
      let blockArr = [];
      snapshot.forEach((item) => {
        if (item.val().blockedbyid == user.uid) {
          blockArr.push({
            id: item.key,
            block: item.val().block,
            blockid: item.val().blockid,
          });
        } else {
          blockArr.push({
            id: item.key,
            blockedby: item.val().blockedby,
            blockedbyid: item.val().blockedbyid,
          });
        }
      });
      setBlockedlist(blockArr);
    });
  }, []);

  //Unblock friends
  const handleUnblock = (item) => {
    set(push(ref(db, "friends")), {
      sendername: item.block,
      senderid: item.blockid,
      reciverid: user.uid,
      recivername: user.displayName,
    }).then(() => {
      remove(ref(db, "block/" + item.id));
    });
  };

  return (
    <div className="blockedlist">
      <div className="blockedlist__header">
        <h4>Blocked list</h4>
        <div className="blockedlist__searchBox">
          <AiOutlineSearch />
          <input
            type="text"
            name="blockedlist"
            id="blockedlist"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="blockedlist__body">
        {blockedlist.map((item, i) => (
          <div className="blockedlist__wrapper" key={i}>
            <div className="blockedlist__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="blockedlist__title">
              <h4>{item.block}</h4>
              <h4>{item.blockedby}</h4>
            </div>
            {!item.blockedbyid && (
              <div className="blockedlist__btn">
                <Button variant="outlined" onClick={() => handleUnblock(item)}>
                  Unblock
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blockeduser;
