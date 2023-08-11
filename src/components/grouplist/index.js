import React, { useEffect, useState } from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Backdrop, Box, Button, Fade, Modal, TextField } from "@mui/material";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";

const Grouplist = () => {
  const db = getDatabase();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [groupname, setGroupname] = useState("");
  const [grouptagname, setGrouptagname] = useState("");
  const [grouplist, setGrouplist] = useState([]);
  const user = useSelector((users) => users.login.loggedIn);

  const handleCreategroup = () => {
    set(push(ref(db, "groups")), {
      groupname: groupname,
      grouptagname: grouptagname,
      admin: user.displayName,
      adminid: user.uid,
      // date: `${new Date().getFullYear()} / ${
      //   new Date().getMonth() + 1
      // } / ${new Date().getDay()}`,
      date: `${new Date().getDay()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
    }).then(() => {
      setOpen(false);
    });
  };
  // show all group
  useEffect(() => {
    const starCountRef = ref(db, "groups/");
    onValue(starCountRef, (snapshot) => {
      let grpArr = [];
      snapshot.forEach((item) => {
        if (item.val().adminid !== user.uid) {
          grpArr.push({ ...item.val(), id: item.key });
        }
      });
      setGrouplist(grpArr);
    });
  }, []);

  return (
    <>
      <div className="grouplist">
        <div className="grouplist__header">
          <h4>Group list</h4>
          <div className="grouplist__search__create">
            <div className="grouplist__searchBox">
              <AiOutlineSearch />
              <input
                type="text"
                name="grouplist"
                id="grouplist"
                placeholder="Search..."
              />
            </div>
            <div className="create__group__btn">
              <Button variant="outlined" onClick={handleOpen}>
                create group
              </Button>
            </div>
          </div>
        </div>

        <div className="grouplist__body">
          {grouplist.map((item, i) => (
            <div className="grouplist__wrapper" key={i}>
              <div className="grouplist__img">
                <picture>
                  <img src="./assets/avatar.png" alt="avatar" />
                </picture>
              </div>
              <div className="grouplist__title">
                <h4>{item.groupname}</h4>
                <span>{item.grouptagname}</span>
              </div>
              <div className="grouplist__btn">
                <Button variant="outlined">Join</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal section start */}
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box className="group__modal__box">
              <div className="create__group__form">
                <h2>create your group</h2>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Group name"
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => setGroupname(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Tag line"
                  variant="outlined"
                  margin="normal"
                  onChange={(e) => setGrouptagname(e.target.value)}
                />
                <Button variant="outlined" onClick={() => handleCreategroup()}>
                  Create Group
                </Button>
              </div>
            </Box>
          </Fade>
        </Modal>
      </div>
    </>
  );
};

export default Grouplist;
