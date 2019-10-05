import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./styles/animate.css";
import "./styles/icons.css";

import HeaderComponent from "./components/HeaderComponent";
import About from "./components/AboutComponent";
import AppNavigation from "./components/AppNavigation";
import ServicesComponent from "./components/ServicesComponent";

function App() {
  return (
    <div className="App" id="colorlib-page">
      <div className="container-wrap">
        <Router basename={process.env.PUBLIC_URL}>
          <AppNavigation />

          <div id="colorlib-main">
            <Switch>
              <Route exact path="/" component={HeaderComponent} />
              <Route exact path="/home" component={HeaderComponent} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={ServicesComponent} />
              {/* <Route exactly component={Page1} pattern="/path1" />
              <Route exactly component={Page2} pattern="/path2" />
              <Route exactly component={Page3} pattern="/path3" />
              <Route component={Page404} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
