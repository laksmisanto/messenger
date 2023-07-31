import { React, useEffect, useState } from "react";
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

const Userlist = () => {
  const [userlist, setUserlist] = useState([]);
  const [filterUser, setFilterUser] = useState([]);
  const [frndReq, setFrndReq] = useState([]);
  const [friendslist, setFriendslist] = useState([]);
  const user = useSelector((users) => users.login.loggedIn);
  const db = getDatabase();

  // user search
  const handleUserSearch = (e) => {
    let arr = [];
    if (e.target.value.length == 0) {
      setFilterUser([]);
    }
    userlist.filter((item) => {
      if (item.username.toLowerCase().includes(e.target.value.toLowerCase())) {
        arr.push(item);
        setFilterUser(arr);
      }
    });
  };

  // show user in your messenger
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      let userArr = [];
      snapshot.forEach((userlists) => {
        if (user.uid != userlists.key) {
          userArr.push({ ...userlists.val(), id: userlists.key });
        }
      });
      setUserlist(userArr);
    });
  }, []);

  // show friends request
  useEffect(() => {
    const starCountRef = ref(db, "friendrequest");
    onValue(starCountRef, (snapshot) => {
      let frndreqArr = [];
      snapshot.forEach((item) => {
        frndreqArr.push(item.val().reciverid + item.val().senderid);
      });
      setFrndReq(frndreqArr);
    });
  }, []);

  //firends request send
  const handleFriendReqSend = (item) => {
    set(push(ref(db, "friendrequest")), {
      sendername: user.displayName,
      senderid: user.uid,
      recivername: item.username,
      reciverid: item.id,
    });
  };

  //cancel friends request
  const handleCancelreq = (item) => {
    // remove(ref(db, "friendrequest/" + item.id));
  };

  // accepted friends button disable
  useEffect(() => {
    const starCountRef = ref(db, "friends");
    onValue(starCountRef, (snapshot) => {
      let frndlistArr = [];
      snapshot.forEach((item) => {
        frndlistArr.push(item.val().reciverid + item.val().senderid);
      });
      setFriendslist(frndlistArr);
    });
  }, []);

  return (
    <div className="userlist">
      <div className="userlist__header">
        <h4>User list</h4>
        <div className="userlist__searchBox">
          <AiOutlineSearch />
          <input
            type="text"
            name="userlist"
            id="userlist"
            placeholder="Search..."
            onChange={handleUserSearch}
          />
        </div>
      </div>
      <div className="userlist__body">
        {filterUser.length > 0
          ? filterUser.map((item, index) => (
              <div className="userlist__wrapper" key={index}>
                <div className="userlist__img">
                  <picture>
                    <img src="./assets/avatar.png" alt="avatar" />
                  </picture>
                </div>
                <div className="userlist__title">
                  <h4>{item.username}</h4>
                </div>
                <div className="userlist__btn">
                  {friendslist.includes(item.id + user.uid) ||
                  friendslist.includes(user.uid + item.id) ? (
                    <Button variant="outlined" disabled>
                      Friends
                    </Button>
                  ) : frndReq.includes(item.id + user.uid) ||
                    frndReq.includes(user.uid + item.id) ? (
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleCancelreq(item)}
                    >
                      Cancel request
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => handleFriendReqSend(item)}
                    >
                      Add Friend
                    </Button>
                  )}
                </div>
              </div>
            ))
          : userlist.map((item, index) => (
              <div className="userlist__wrapper" key={index}>
                <div className="userlist__img">
                  <picture>
                    <img src="./assets/avatar.png" alt="avatar" />
                  </picture>
                </div>
                <div className="userlist__title">
                  <h4>{item.username}</h4>
                </div>
                <div className="userlist__btn">
                  {friendslist.includes(item.id + user.uid) ||
                  friendslist.includes(user.uid + item.id) ? (
                    <Button variant="outlined" disabled>
                      Friends
                    </Button>
                  ) : frndReq.includes(item.id + user.uid) ||
                    frndReq.includes(user.uid + item.id) ? (
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleCancelreq(item)}
                    >
                      Cancel request
                    </Button>
                  ) : (
                    <Button
                      variant="outlined"
                      onClick={() => handleFriendReqSend(item)}
                    >
                      Add Friend
                    </Button>
                  )}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Userlist;
