import React from 'react';
import './App.css';
import Particle from './component/particle/particle'
import {Layout, Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './pages/main'
import Footer from './component/footer/footer';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Landing from './pages/landingpage/landingpage';
import AboutMe from './pages/aboutme/aboutme';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';
import Resume from './pages/resume/resume';
function App() {
  return (
    <div style={{height: '800px', position: 'relative'}}>
    <Router basename={ process.env.PUBLIC_URL + '/' }>
    <Layout fixedHeader>
        <Header className = "header-color" transparent title={<span><span style={{ color: '#ddd', marginBottom: '0'}}></span><strong>Navigation</strong></span>}>
          <Navigation>
            <Link to="/">Profile</Link>
            <Link to="/aboutMe">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Go to ...">
            <Navigation>
              <Link to="/">Profile</Link>
              <Link to="/aboutMe">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Particle />
          <Switch> 
              <Route exact path= '/' component={Landing} />
              <Route path= '/aboutMe' component={AboutMe} />
              <Route path= '/contact' component={Contact} />
              <Route path= '/project' component={Project} />
              <Route path= '/resume' component={Resume} />
              <Route path= '/landing' component={Landing} />
            </Switch> 
        </Content>
        <Footer/>
    </Layout>
    </Router>
</div>
  );
}

export default App;
