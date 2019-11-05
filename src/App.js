import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./styles/animate.css";
import "./styles/icons.css";

import HeaderComponent from "./components/HeaderComponent";
import About from "./components/AboutComponent";
import AppNavigation from "./components/AppNavigation";
import ServicesComponent from "./components/ServicesComponent";
import SkillsComponent from "./components/SkillsComponent";
import EducationComponent from "./components/EducationComponent";
import ExperienceComponent from "./components/ExperienceComponent";
import WorkComponent from "./components/WorkComponent";
import ContactComponent from "./components/ContactComponent";
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
              <Route exact path="/skills" component={SkillsComponent} />
              <Route exact path="/education" component={EducationComponent} />
              <Route exact path="/experience" component={ExperienceComponent} />
              <Route exact path="/work" component={WorkComponent} />
              <Route exact path="/contact" component={ContactComponent} />
              {/* <Route component={Page404} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
