import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import App from "./app/App";
import "./reset.css";
import { store } from "./app/store";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
