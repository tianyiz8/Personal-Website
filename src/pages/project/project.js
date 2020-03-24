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
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png) center / cover'}}>Scribr (In progress)</CardTitle>
                        <CardText>
                            The CS 196 Scribr project, using React and Flask.
                        </CardText>
                        <CardActions border>
                        <a href="https://github.com/CS196Illinois/team3" target="_blank" rel="noopener noreferrer">
                          <Button colored>GitHub Link</Button>
                        </a>
                        <a href="https://www.youtube.com/watch?v=mv16-z2bcug" target="_blank" rel="noopener noreferrer">
                            <Button colored>Demo Video</Button>
                        </a>
                        </CardActions>
                    </Card>
                    <Card shadow={0} style={{width: '20rem', height: '20rem', margin: 'auto'}}>
                        <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/logos-3/426/react_js-512.png) center / cover'}}>To be continued ... </CardTitle>
                        <CardText>
                            To be continue ...
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub Link</Button>
                            <Button colored>Demo Video</Button>
                        </CardActions>
                    </Card>
              </div>
        );
    }
}
 
export default Project;