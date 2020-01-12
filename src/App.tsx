import React from "react";
import { CloudForm } from "CloudForm";
import { postData } from "api";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  }
}));
const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Cloud 9
          </Typography>
        </Toolbar>
      </AppBar>
      <CloudForm sendData={postData} />;
    </>
  );
};

export default App;
