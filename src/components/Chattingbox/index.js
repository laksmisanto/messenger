import React, { useEffect, useState } from "react";
import "./style.css";
import MessageBox from "./MessageBox";
import { GrEmoji } from "react-icons/gr";
import { BsCamera } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { MdOutlineClose } from "react-icons/md";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import {
  getStorage,
  ref as sref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { v4 as uuidv4 } from "uuid";
import EmojiPicker from "emoji-picker-react";
import { AudioRecorder } from "react-audio-voice-recorder";

const ChattingBox = () => {
  const activeChat = useSelector((state) => state.active.activeState);
  const user = useSelector((users) => users.login.loggedIn);
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const [openCam, setOpenCam] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const db = getDatabase();
  const storage = getStorage();

  const handleMsgSend = () => {
    setShowEmoji(false);
    if (activeChat?.status === "single") {
      set(push(ref(db, "singleMsg")), {
        whosendid: user.uid,
        whosendname: user.displayName,
        whoreceiveid: activeChat?.id,
        whoreceivename: activeChat?.name,
        msg: msg,
        date: `${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}`,
      }).then(() => {
        setMsg("");
      });
    } else {
      console.log("group message");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key == "Enter") {
      handleMsgSend();
      setShowEmoji(false);
    }
  };

  useEffect(() => {
    const starCountRef = ref(db, "singleMsg");
    onValue(starCountRef, (snapshot) => {
      let msgArr = [];
      snapshot.forEach((item) => {
        if (
          (item.val().whosendid == user.uid &&
            item.val().whoreceiveid == activeChat?.id) ||
          (item.val().whosendid == activeChat?.id &&
            item.val().whoreceiveid == user.uid)
        ) {
          msgArr.push(item.val());
        }
      });
      setMsgList(msgArr);
    });
  }, [activeChat?.id]);

  const handleImageUpload = (e) => {
    const storageRef = sref(storage, e.target.files[0].name);
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log("Image Upload Error : ", error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          set(push(ref(db, "singleMsg")), {
            whosendid: user.uid,
            whosendname: user.displayName,
            whoreceiveid: activeChat?.id,
            whoreceivename: activeChat?.name,
            img: downloadURL,
            date: `${new Date().getFullYear()}-${
              new Date().getMonth() + 1
            }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}`,
          });
        });
      }
    );
  };

  function handleTakePhoto(dataUri) {
    console.log("takePhoto", dataUri);
    const storageRef = sref(storage, uuidv4());
    uploadString(storageRef, dataUri, "data_url").then((snapshot) => {
      getDownloadURL(storageRef).then((downloadURL) => {
        set(push(ref(db, "singleMsg")), {
          whosendid: user.uid,
          whosendname: user.displayName,
          whoreceiveid: activeChat?.id,
          whoreceivename: activeChat?.name,
          img: downloadURL,
          date: `${new Date().getFullYear()}-${
            new Date().getMonth() + 1
          }-${new Date().getDate()}-${new Date().getHours()}-${new Date().getMinutes()}`,
        }).then(() => {
          setOpenCam(false);
        });
      });
    });
  }

  const handleEmoji = (emoji) => {
    setMsg((message) => message + emoji.emoji);
  };

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <>
      {openCam && (
        <div className="capture__image">
          <span className="capture__close" onClick={() => setOpenCam(false)}>
            <MdOutlineClose />
          </span>
          <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          />
        </div>
      )}

      <div className="chatting__box__container">
        <div className="chatting__box__header">
          <div className="message__img">
            <picture>
              <img src="./assets/avatar.png" alt="avatar" />
            </picture>
          </div>
          <div className="author__info">
            <h4>{activeChat?.name}</h4>
            <p>active</p>
          </div>
        </div>
        <div className="chatting__box__body">
          <div className="chatting__box__wrapper">
            <MessageBox msgList={msgList} />
          </div>
        </div>
        <div className="chatting__box__footer">
          <div className="input__box">
            <input
              type="text"
              id="message"
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyUp={handleEnterPress}
            />
          </div>
          <div className="audio">
            <AudioRecorder
              onRecordingComplete={addAudioElement}
              audioTrackConstraints={{
                noiseSuppression: true,
                echoCancellation: true,
                // autoGainControl,
                // channelCount,
                // deviceId,
                // groupId,
                // sampleRate,
                // sampleSize,
              }}
              onNotAllowedOrFound={(err) => console.table(err)}
              downloadOnSavePress={true}
              downloadFileExtension="webm"
              mediaRecorderOptions={{
                audioBitsPerSecond: 128000,
              }}
              // showVisualizer={true}
            />
          </div>
          <div className="attachment">
            <label>
              <input type="file" hidden onChange={handleImageUpload} />
              <GrAttachment />
            </label>
          </div>
          <div className="emoji__container">
            <div className="emoji" onClick={() => setShowEmoji(!showEmoji)}>
              <GrEmoji />
            </div>
            <div className="emoji__picker">
              {showEmoji && <EmojiPicker onEmojiClick={handleEmoji} />}
            </div>
          </div>
          <div className="camera" onClick={() => setOpenCam(true)}>
            <BsCamera />
          </div>
          <div className="send__btn">
            <Button variant="contained" onClick={handleMsgSend}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChattingBox;
