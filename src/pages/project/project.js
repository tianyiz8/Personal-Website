import React, { Component } from 'react';
import { Card, CardTitle, CardActions, CardText, Button } from 'react-mdl';
import "./project.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
class Project extends Component {

    render() { 
        AOS.init();
        return (
              <div data-aos="fade-up" data-aos-duration="1500" className="row" >
                    <Card shadow={0} style={{width: '20rem', height: '20rem', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png) center / cover'}}>Personal Website</CardTitle>
                        <CardText>
                            This personal Website.
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/tianyiz8/personal-website/tree/master" target="_blank" rel="noopener noreferrer">
                            <Button colored>GitHub Link</Button>
                        </a>
                        <a href="https://www.youtube.com/watch?v=HQnVfgG8Kvw" target="_blank" rel="noopener noreferrer">
                            <Button colored>Demo Video</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{width: '20rem', height: '20rem', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png) center / cover'}}>Scribr</CardTitle>
                        <CardText>
                            The CS 196 Scribr project, using React and Flask frameworks.
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/CS196Illinois/team3" target="_blank" rel="noopener noreferrer">
                          <Button colored>GitHub Link</Button>
                        </a>
                        <a href="https://www.youtube.com/watch?v=S3SepCcfXhE&t=46s" target="_blank" rel="noopener noreferrer">
                            <Button colored>Demo Video</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{width: '20rem', height: '20rem', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png) center / cover'}}>COVID19-TimerKiller</CardTitle>
                        <CardText>
                            The CS 125 COVID19 TimeKiller project, using React Native framework.
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/tianyiz8/timeKiller" target="_blank" rel="noopener noreferrer">
                          <Button colored>GitHub Link</Button>
                        </a>
                        <a href="https://www.youtube.com/watch?v=TMPcqSrhGZU&t=116s" target="_blank" rel="noopener noreferrer">
                            <Button colored>Demo Video</Button>
                        </a>
                        </CardActions>
                    </Card>
              </div>
        );
    }
}
 
export default Project;