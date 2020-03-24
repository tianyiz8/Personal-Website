import React from 'react';
import './footer.css';
import GithubLogo from '../../component/picture/github.png';
import LinkedInLogo from '../../component/picture/linkedin.png';

function Footer() {
  return(
    <div className="footer-main">
      <div>
        <a href="https://github.com/tianyiz8" target="_blank" rel="noopener noreferrer">
          <img className="github-logo" src={GithubLogo} alt="Github"/>
        </a>
        <a href="https://www.linkedin.com/in/tianyi-zhou-967991193/" target="_blank" rel="noopener noreferrer">
          <img className='linkedin-logo' src={LinkedInLogo} alt="LinkedIn"/>
        </a>
        <p className="credit">Made by Bryant Zhou 2020</p>
      </div>
    </div>
  );
}
export default Footer;