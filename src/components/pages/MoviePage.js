import { makeStyles } from "@material-ui/core";
import React from "react";
import MovieList from "../movies/MovieList";

const useStyle = makeStyles(() => ({
  root: {
    position: "relative",
    flexGrow: 1,
  },
}));

const MainPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <MovieList />
    </div>
  );
};

export default MainPage;
