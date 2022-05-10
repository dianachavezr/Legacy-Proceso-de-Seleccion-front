import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./router";
import { store } from "./store/store";
import "./styles/app.css";
import StateContext from './Context/status'


ReactDom.render(
  <Provider store={store}>
    <Router>
      <StateContext>
        <App />
      </StateContext>
    </Router>
  </Provider>,
  document.getElementById("app")
);
