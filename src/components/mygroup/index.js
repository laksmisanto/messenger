import React, { useEffect, useState } from "react";
import "./style.css";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { BiDotsVerticalRounded, BiArrowBack } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import moment from "moment/moment";

const Groups = () => {
  const db = getDatabase();
  const [grouplist, setGrouplist] = useState([]);
  const [showGrpReq, setShowGrpReq] = useState(false);
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
    setShowGrpReq(true);

    const starCountRef = ref(db, "groupjoinreq/");
    onValue(starCountRef, (snapshot) => {
      let grpReqArr = [];
      snapshot.forEach((item) => {
        if (item.val().adminid == user.uid && item.val().groupid == gitem.id) {
          grpReqArr.push({ ...item.val(), id: item.key });
        }
      });
      setReqmemberlist(grpReqArr);
    });
  };

  // close this group body
  const handleGroupBack = () => {
    setShowGrpReq(false);
  };

  // handle group request accept

  const handleGrpReqAccept = (item) => {
    set(push(ref(db, "groupmembers")), {
      admin: item.admin,
      adminid: item.adminid,
      groupname: item.groupname,
      groupid: item.groupid,
      grouptagname: item.grouptagname,
      username: item.username,
      userid: item.userid,
      date: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}`,
    }).then(() => {
      remove(ref(db, "groupjoinreq/" + item.id));
    });
  };

  //handle group request cancel

  const handleGrpReqCancel = (item) => {
    remove(ref(db, "groupjoinreq/" + item.id));
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
      {showGrpReq ? (
        <div className="mygroups__body">
          <div className="mygroups__back__btn">
            <BiArrowBack onClick={handleGroupBack} />
          </div>
          {reqmemberlist.length > 0 ? (
            reqmemberlist.map((item, i) => (
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
                  <div className="accept__btn">
                    <BsCheckCircle onClick={() => handleGrpReqAccept(item)} />
                  </div>
                  <div className="close__btn">
                    <FaTrash onClick={() => handleGrpReqCancel(item)} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5 className="no__req">No member request</h5>
          )}
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
                <span>{moment(item.date, "YYYYMMDD hh:mm").fromNow()}</span>
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
