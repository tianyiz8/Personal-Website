import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Landing from './pages/landingpage/landingpage';
import AboutMe from './pages/aboutme/aboutme';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';
import Resume from './pages/resume/resume';
import { BrowserRouter, Route } from 'react-router-dom';
const routing = () => (
  <BrowserRouter>
    <div> 
      <Route exact path= {process.env.PUBLIC_URL + '/'} component={Landing} />
      <Route path= {process.env.PUBLIC_URL + '/aboutMe'} component={App} />
      <Route path= {process.env.PUBLIC_URL + '/contact'} component={App} />
      <Route path= {process.env.PUBLIC_URL + '/project'} component={App} />
      <Route path= {process.env.PUBLIC_URL + '/resume'} component={App} />
      <Route path= {process.env.PUBLIC_URL + '/landing'} component={App} />
    </div> 
  </BrowserRouter>
)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'), routing
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
