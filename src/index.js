import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster />
  </React.StrictMode>,
  document.getElementById("root")
);
