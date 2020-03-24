import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import LandingPage from './pages/landingpage/landingpage';
import AboutMe from './pages/aboutme/aboutme';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';
import Resume from './pages/resume/resume';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/landingpage/landingpage';
const routing = () => (
  <BrowserRouter basename={ process.env.PUBLIC_URL + '/'}>
    <div> 
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Landing} />
      <Route path= {process.env.PUBLIC_URL + '/aboutMe'}component={AboutMe} />
      <Route path= {process.env.PUBLIC_URL + '/contact'}component={Contact} />
      <Route path= {process.env.PUBLIC_URL + '/project'}component={Project} />
      <Route path= {process.env.PUBLIC_URL + '/resume'}component={Resume} />
      <Route path= {process.env.PUBLIC_URL + '/landing'}component={Landing} />
    </div> 
  </BrowserRouter>
)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
