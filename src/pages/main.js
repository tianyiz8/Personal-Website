import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './landingpage/landingpage';
import AboutMe from './aboutme/aboutme';
import Project from './project/project';
import Contact from './contact/contact';
import Resume from './resume/resume';

const Main = () => (
  <BrowserRouter basename={ process.env.PUBLIC_URL + '/' }>
    <Switch> 
      <Route exact path= '/' component={Landing} />
      <Route path= '/aboutMe' component={AboutMe} />
      <Route path= '/contact' component={Contact} />
      <Route path= '/project' component={Project} />
      <Route path= '/resume' component={Resume} />
      <Route path= '/landing' component={Landing} />
    </Switch> 
  </BrowserRouter>
)

export default Main;