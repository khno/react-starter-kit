import React, { Component } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {createStore} from "redux"
import App from "./containers/App.jsx";
import reducers from "./reducers"

import "./styles/index.less"

const store = createStore(reducers);

render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("app")
);
