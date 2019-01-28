import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header/index.jsx";
import Home from "./home/index.jsx";
import Details from "./details/index.jsx";
import Mine from "./mine/index.jsx";
import Login from "./login/index.jsx";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mine" component={Mine} />
          {/* <Route path="/details" component={Details} /> */}
          <Route exact path="/details/:id" component={Details} />
        </Switch>

        <Login />
      </React.Fragment>
    );
  }
}

export default App;
