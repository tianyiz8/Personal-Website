import React from 'react';
import './App.css';
import Particle from './component/particle/particle'
import {Layout, Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './pages/main'
import Footer from './component/footer/footer';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Landing from './pages/landingpage/landingpage';
import AboutMe from './pages/aboutme/aboutme';
import Project from './pages/project/project';
import Contact from './pages/contact/contact';
import Resume from './pages/resume/resume';
function App() {
  return (
    <div style={{height: '800px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className = "header-color" transparent title={<span><span style={{ color: '#ddd', marginBottom: '0'}}></span><strong>Navigation</strong></span>}>
          <Navigation>
            <a href="/landing">Profile</a>
            <a href="/aboutMe">About Me</a>
            <a href="/resume">Resume</a>
            <a href="/project">Project</a>
            <a href="/contact">Contact</a>
          </Navigation>
        </Header>
        <Drawer title="Go to ...">
         <Router basename={ process.env.PUBLIC_URL + '/' }>
            <Navigation>
              <Link to="/">Profile</Link>
              <Link to="/aboutMe">About</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/project">Project</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Router>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Particle />
          <Main />
        </Content>
        <Footer/>
    </Layout>
</div>
  );
}

export default App;
