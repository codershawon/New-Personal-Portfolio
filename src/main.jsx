import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
