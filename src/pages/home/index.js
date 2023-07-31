import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import Grouplist from "../../components/grouplist";
import Friends from "../../components/friends";
import Groups from "../../components/mygroup";
import Userlist from "../../components/userlist";
import Blockeduser from "../../components/blockeduser";
import Friendrequest from "../../components/friendrequest";

const Home = () => {
  return (
    <>
      <Grid container className="home__page">
        <Grid xs={4}>
          <div className="group__list">
            <Grouplist />
          </div>
          <div className="friend__list">
            <Friendrequest />
          </div>
        </Grid>
        <Grid xs={4}>
          <div className="friends__container">
            <Friends />
          </div>
          <div className="groups__container">
            <Groups />
          </div>
        </Grid>
        <Grid xs={4}>
          <div className="user__list">
            <Userlist />
          </div>
          <div className="block__list">
            <Blockeduser />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
