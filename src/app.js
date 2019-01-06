import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore} from "redux"
// import PropTypes from "prop-types";
// import "./app.css";
// import Header from "./components/Header";
// import Form from "./components/Form";
import App from "./containers/App.jsx";
import reducers from "./reducers"

const store = createStore(reducers);

render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("app")
);
