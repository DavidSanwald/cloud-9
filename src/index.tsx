import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import App from "./App";

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <CssBaseline />
    <App />
  </MuiPickersUtilsProvider>,
  document.getElementById("root")
);
