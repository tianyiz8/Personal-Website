import React from 'react';
import LandingPage from './landingpage/landingpage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutMe from './aboutme/aboutme';
import Project from './project/project';
import Contact from './contact/contact';
import Resume from './resume/resume';

const Main = () => (
  <BrowserRouter basename={ process.env.PUBLIC_URL + '/'}>
    <Switch> 
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutMe" component={AboutMe} />
      <Route path="/contact" component={Contact} />
      <Route path="/project" component={Project} />
      <Route path="/resume" component={Resume} />
      <Route path="/Landing" component={LandingPage} />
    </Switch> 
  </BrowserRouter>
)

export default Main;