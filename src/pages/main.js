import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage/landingpage';
import AboutMe from './aboutme/aboutme';
import Project from './project/project';
import Contact from './contact/contact';
import Resume from './resume/resume';

const Main = () => (
  <BrowserRouter basename={ process.env.REACT_APP_ROUTER_BASE || ''}>
    <Switch> 
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutMe" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/project" component={Project} />
      <Route path="/resume" component={Resume} />
      <Route path="/landing" component={LandingPage} />
    </Switch> 
  </BrowserRouter>
)

export default Main;