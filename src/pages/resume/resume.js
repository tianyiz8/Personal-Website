import React, { Component } from 'react';
import './resume.css';
import {Grid, Cell} from 'react-mdl';
import Activity from './activity'
class Resume extends Component {

    render() { 
        return (
            <div className="bigGrid">
              <h2 style={{marginBottom:'0%', marginTop:'0%'}}>Tianyi(Bryant) Zhou</h2>
              <div className = "firstGrid" style={{width: '100%', margin: 'auto', color: 'white'}}>
              <Grid className="demo-grid-2">
                <Cell col={6}>
                  <Activity
                  place="University of Illinois at Urbana-Champaign"
                  position="Bachelor of Science in Econometrics, Minor in CS"
                  address="08/2019 - 05/2022"
                  time="GPA: 4.0 / 4.0"
                  />
                  <h3 style={{paddingTop:'4rem', marginLeft:'2%', marginBottom:'0rem'}}>Activities</h3>
                  <hr style={{width:'90%', marginTop:'0rem', marginLeft:'2%', marginBottom:'-2rem'}}/>
                  <Activity
                  place="FACES Consulting"
                  position="Consultant"
                  address="Champaign, Illinois"
                  time="02/2020 - 04/2020"
                  />
                  <div className="description">
                    <p style={{paddingTop:"1.5rem", marginBottom:"0rem"}}>• Conduct market research and competitor analysis for a VR startup.</p>
                    <p style={{marginTop:"0rem", marginBottom:"0rem"}}>• Analyze the market trend and use data visualization tool to give a clear view.</p>
                    <p style={{marginTop:"0rem", marginBottom:"1rem"}}>• Identify the key area for improvement in the customer's current VR device.</p>
                  </div>
                  <Activity
                  place="Trueland LLC"
                  position="Student Coordinator"
                  address="Richmond, Virginia"
                  time="08/2019"
                  />
                  <div className="description">
                    <p style={{paddingTop:"1.5rem", marginBottom:"0rem"}}>• Translate ESL courses for over 30 Chinese exchange middle schools.</p>
                    <p style={{marginTop:"0rem", marginBottom:"0rem"}}>• Organize and coordinate the commencement party which involved over 80 people.</p>
                    <p style={{marginTop:"0rem", marginBottom:"0rem"}}>• Lead the student groups to Jamestown and introduce the overview of United States history.</p>
                    <p style={{marginTop:"0rem", marginBottom:"1rem"}}>• Edit the program video.</p>
                  </div>
                  <Activity
                  place="Career Development Organization"
                  position="Marketing Department Leader"
                  address="Shanghai, China"
                  time="10/2017 - 09/2018"
                  />
                  <div className="description">
                    <p style={{paddingTop:"1.5rem", marginBottom:"0rem",textAlign:"left"}}>• Coordinate Career Fair, train around 20 volunteers, contact over 50 companies and consolidate database.</p>
                    <p style={{marginTop:"0rem", marginBottom:"0rem",textAlign:"left"}}>• Volunteer in the Financial Career Fair which involved more than 200 enterprises. (HSBC, Citi etc.)</p>
                    <p style={{marginTop:"0rem", marginBottom:"0rem",textAlign:"left"}}>• Draft the Open Day event of Orient Securities Company and audit the plan.</p>
                    <p style={{marginTop:"0rem", marginBottom:"1rem", textAlign:"left"}}>• Write promotion documents of large-scale activities.</p>
                  </div>
                </Cell>
                <Cell col={6} style={{textAlign:'end'}}>
                  <Activity
                  place="Citi Innovation Workshop"
                  position="Participant"
                  address="Shanghai, China"
                  time="07/2017 - 11/2017"
                  />
                  <div className="description">
                    <p style={{paddingTop:"1.5rem", marginBottom:"0rem",textAlign:"left"}}>• Brainstorm new function for Citi app.</p>
                    <p style={{marginTop:"0rem", marginBottom:"0rem",textAlign:"left"}}>• Design UI of the inter-banks money transfer and instant cross-border money transfer on Mockplus.</p>
                    <p style={{marginTop:"0rem", marginBottom:"-1rem",textAlign:"left"}}>• Present the UI in front of around 50 people, including managers of Citi.</p>
                  </div>
                  <h3 style={{paddingTop:'-2rem', marginLeft:'2%', marginBottom:'0rem', textAlign:"left"}}>Skills</h3>
                  <hr style={{width:'90%', marginTop:'0rem', marginLeft:'2%', marginBottom:'0rem'}}/>
                  <div className="skill">
                    <p style={{paddingTop:"1.5rem", marginBottom:"0rem",textAlign:"left"}}>• Certificate: Udemy: Real World Coding in HTML & CSS</p>
                    <p style={{marginTop:"0rem", marginBottom:"0rem",textAlign:"left"}}>• Skill: Memorization (Memory Palace); JavaScript; React; React Native; Angular; Python; Java</p>
                    <p style={{marginTop:"0rem", marginBottom:"0rem",textAlign:"left"}}>• Honor: Dean’s List (FA 2019)</p>
                    <p style={{marginTop:"0rem", marginBottom:"-1rem",textAlign:"left"}}>• Language: Chinese (Native), English (Proficient), Spanish (basic)</p>
                  </div>
                </Cell>
              </Grid>
              </div>
            </div>
        );
    }
}
 
export default Resume;