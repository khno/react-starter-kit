import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { AUTH_USER } from "./actions/types";
import AppRouter from "./containers/AppRouter.jsx";
import "./styles/index.less";

const store = configureStore();

const token = localStorage.getItem("token");
if (token) {
  store.dispatch({ type: AUTH_USER });
}

render(
  <HashRouter>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </HashRouter>,
  document.getElementById("app")
);
