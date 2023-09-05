import React, { useEffect, useState } from "react";
import "./style.css";
import { getDatabase, onValue, ref } from "firebase/database";
import { useSelector } from "react-redux";
import { AiOutlineSearch, AiOutlineCheckCircle } from "react-icons/ai";
import { BiDotsVerticalRounded, BiArrowBack } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

const Groups = () => {
  const db = getDatabase();
  const [grouplist, setGrouplist] = useState([]);
  const [showReqGrp, setShowReqGrp] = useState(false);
  const [reqmemberlist, setReqmemberlist] = useState([]);
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

  // show my group people group
  const handleReqgroup = (gitem) => {
    setShowReqGrp(true);

    const starCountRef = ref(db, "groupjoinreq/");
    onValue(starCountRef, (snapshot) => {
      let grpReqArr = [];
      snapshot.forEach((item) => {
        if (item.val().adminid == user.uid && item.val().groupid == gitem.id) {
          grpReqArr.push({ ...item.val(), id: item.key });
          console.log(item.val());
        }
      });
      setReqmemberlist(grpReqArr);
    });
  };

  // close this group body
  const handleGroupBack = () => {
    setShowReqGrp(false);
  };

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
      {showReqGrp ? (
        <div className="mygroups__body">
          <div className="mygroups__back__btn">
            <BiArrowBack onClick={handleGroupBack} />
          </div>
          {reqmemberlist.map((item, i) => (
            <div className="mygroups__wrapper" key={i}>
              <div className="group__req__img">
                <picture>
                  <img src="./assets/avatar.png" alt="avatar" />
                </picture>
              </div>
              <div className="group__req__info">
                <h4>{item.username}</h4>
              </div>
              <div className="group__req__btn">
                <AiOutlineCheckCircle />
                <FaTrash />
              </div>
            </div>
          ))}
        </div>
      ) : (
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
              <div
                className="group__setting"
                onClick={() => handleReqgroup(item)}
              >
                <BiDotsVerticalRounded />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Groups;
