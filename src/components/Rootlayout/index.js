import React from "react";
import "./style.css";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";

const Rootlayout = () => {
  return (
    <>
      <div className="root__layout">
        <Grid container spacing={2}>
          <Grid item xs={3} sm={2} md={1}>
            <Sidebar />
          </Grid>
          <Grid item xs={9} sm={10} md={11}>
            <Outlet />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Rootlayout;
