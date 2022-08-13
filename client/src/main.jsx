import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { stores } from "./store/Reducer.js";

ReactDom.createRoot(document.querySelector("#root")).render(
  <Provider store={stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
