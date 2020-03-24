import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './landingpage/landingpage';
import AboutMe from './aboutme/aboutme';
import Project from './project/project';
import Contact from './contact/contact';
import Resume from './resume/resume';

const Main = () => (
  <BrowserRouter basename={ process.env.PUBLIC_URL + '/' }>
    <div> 
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Landing} />
      <Route path= {process.env.PUBLIC_URL + '/aboutMe'} component={AboutMe} />
      <Route path= {process.env.PUBLIC_URL + '/contact'} component={Contact} />
      <Route path= {process.env.PUBLIC_URL + '/project'} component={Project} />
      <Route path= {process.env.PUBLIC_URL + '/resume'} component={Resume} />
      <Route path= {process.env.PUBLIC_URL + '/landing'} component={Landing} />
    </div> 
  </BrowserRouter>
)

export default Main;