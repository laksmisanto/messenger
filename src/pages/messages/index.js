import React from "react";
import { Grid } from "@mui/material";
import "./style.css";
import GroupMessageBx from "../../components/GroupMessage/GroupMessageBx";
import Friends from "../../components/friends";
import MessageBox from "../../components/MessageBox";

const Messages = () => {
  return (
    <>
      <div className="messege__container">
        <Grid container justifyContent={"space-around"}>
          <Grid xs={4}>
            <div className="group__list">
              <GroupMessageBx />
            </div>
            <div className="friend__list">
              <Friends />
            </div>
          </Grid>
          <Grid xs={7}>
            <div className="message__box">
              <MessageBox/>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Messages;
