import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles(() => ({
  root: {
    position: "relative",
    minHeight: "100vh",
  },
}));

const MainPage = () => {
  const classes = useStyle();
  return <div className={classes.root}></div>;
};

export default MainPage;
