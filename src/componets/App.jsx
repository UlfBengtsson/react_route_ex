import React, { Component } from "react";

import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import People from "./People";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/people">People</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
