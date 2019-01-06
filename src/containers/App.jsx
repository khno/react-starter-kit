import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Home from "./home/index.jsx";
import About from "./about/index.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <li>
          <Link to="/">Netflix</Link>
        </li>
        <li>
          <Link to="/about">Zillow Group</Link>
        </li>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
