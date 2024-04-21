import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./style.css";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector, useDispatch } from "react-redux";
import { activeUserChat } from "../../feature/slice/activeChatting";

const GroupMessageBx = () => {
  const [groupList, setGrouplist] = useState([]);
  const db = getDatabase();
  const dispatch = useDispatch();
  const user = useSelector((users) => users.login.loggedIn);
  useEffect(() => {
    const starCountRef = ref(db, "groups/");
    onValue(starCountRef, (snapshot) => {
      let grpArr = [];
      snapshot.forEach((item) => {
        grpArr.push({ ...item.val(), id: item.key });
      });
      setGrouplist(grpArr);
    });
  }, []);
  console.log(groupList);
  const handleActiveGroup = (item) => {
    console.log(item);
    dispatch(
      activeUserChat({
        status: "group",
        id: item.id,
        name: item.groupname,
        adminid: item.adminid,
        admin: item.admin,
      })
    );
  };
  return (
    <>
      <div className="msg__grouplist">
        <div className="msg__grouplist__header">
          <h4>Group list</h4>
          <div className="msg__grouplist__search__create">
            <div className="msg__grouplist__searchBox">
              <AiOutlineSearch />
              <input
                type="text"
                name="grouplist"
                id="grouplist"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>

        <div className="msg__grouplist__body">
          {groupList.map((item, i) => (
            <div
              className="msg__grouplist__wrapper"
              key={i}
              onClick={() => handleActiveGroup(item)}
            >
              <div className="msg__grouplist__img">
                <picture>
                  <img src="./assets/avatar.png" alt="avatar" />
                </picture>
              </div>
              <div className="msg__grouplist__title">
                <h4>{item.groupname}</h4>
                <span>{item.grouptagname}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GroupMessageBx;
