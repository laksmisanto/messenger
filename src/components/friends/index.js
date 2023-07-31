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

const Friends = () => {
  const db = getDatabase();
  const [friendslist, setFriendslist] = useState([]);
  const user = useSelector((users) => users.login.loggedIn);

  // show friends list
  useEffect(() => {
    const starCountRef = ref(db, "friends");
    onValue(starCountRef, (snapshot) => {
      let frndlistArr = [];
      snapshot.forEach((item) => {
        if (
          user.uid == item.val().senderid ||
          user.uid == item.val().reciverid
        ) {
          frndlistArr.push({ ...item.val(), id: item.key });
        }
      });
      setFriendslist(frndlistArr);
    });
  }, []);

  //friends block list
  const handleBlock = (item) => {
    if (user.uid == item.senderid) {
      set(push(ref(db, "block")), {
        // blockedby: user.displayName,
        // blockedbyid: user.uid,
        block: item.recivername,
        blockid: item.reciverid,
        blockedby: item.sendername,
        blockedbyid: item.senderid,
      }).then(() => {
        remove(ref(db, "friends/" + item.id));
      });
    } else {
      set(push(ref(db, "block")), {
        // blockedby: user.displayName,
        // blockedbyid: user.uid,
        block: item.sendername,
        blockid: item.senderid,
        blockedby: item.recivername,
        blockedbyid: item.reciverid,
      }).then(() => {
        remove(ref(db, "friends/" + item.id));
      });
    }
  };

  return (
    <div className="friends">
      <div className="friends__header">
        <h4>friends</h4>
        <div className="friends__searchBox">
          <AiOutlineSearch />
          <input
            type="text"
            name="friends"
            id="friends"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="friends__body">
        {friendslist.map((item, i) => (
          <div className="friends__wrapper" key={i}>
            <div className="friends__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="friends__title">
              <h4>
                {user.uid == item.senderid ? item.recivername : item.sendername}
              </h4>
            </div>
            <div className="friends__btn">
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleBlock(item)}
              >
                block
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friends;
