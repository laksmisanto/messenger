import React, { useEffect, useState } from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Groups = () => {
  const db = getDatabase();
  const [grouplist, setGrouplist] = useState([]);
  const user = useSelector((users) => users.login.loggedIn);
  // show all group
  useEffect(() => {
    const starCountRef = ref(db, "groups/");
    onValue(starCountRef, (snapshot) => {
      let grpArr = [];
      snapshot.forEach((item) => {
        if (item.val().adminid == user.uid) {
          grpArr.push({ ...item.val(), id: item.key });
        }
      });
      setGrouplist(grpArr);
    });
  }, []);
  return (
    <div className="mygroups">
      <div className="mygroups__header">
        <h4>My Groups</h4>
        <div className="mygroups__searchBox">
          <AiOutlineSearch />
          <input
            type="text"
            name="mygroups"
            id="mygroups"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="mygroups__body">
        {grouplist.map((item, i) => (
          <div className="mygroups__wrapper" key={i}>
            <div className="mygroups__img">
              <picture>
                <img src="./assets/avatar.png" alt="avatar" />
              </picture>
            </div>
            <div className="mygroups__title">
              <h4>{item.groupname}</h4>
              <span>{item.grouptagname}</span>
            </div>
            <div className="mygroups__date">
              <p>created</p>
              <span>{item.date}</span>
            </div>
            <div className="group__setting">
              <BiDotsVerticalRounded />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;
