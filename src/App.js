import React from "react";
import { makeStyles } from "@material-ui/core";

import MoviePage from "./components/pages/MoviePage";

const useStyle = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#F2F2F2",
  },
  header: {
    position: "relative",
    height: 150,
    lineHeight: "150px",
    backgroundColor: "#555555",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  mainContent: {
    minHeight: "calc(100vh - 150px)",
    display: "flex",
  },
  logo: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 16,
    height: 118,
    borderRadius: 75,
  },
}));

const App = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        Bienvenue dans Ask for movies
      </header>
      <main className={classes.mainContent}>
        <MoviePage />
      </main>
    </div>
  );
};

export default App;
