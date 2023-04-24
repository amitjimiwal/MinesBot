import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./reduxstore/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  {/*  Providing the store to the app*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
