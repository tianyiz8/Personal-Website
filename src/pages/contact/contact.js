import React, { Component } from 'react';
import {Grid, Cell,List, ListItem,ListItemContent} from 'react-mdl'
import Me from '../../component/picture/me.jpeg'
import './contact.css'
import Phone from '../../component/picture/phone.png'
import Email from '../../component/picture/email.png'
import Facebook from '../../component/picture/facebook.png'
import Ins from '../../component/picture/ins.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
class Contact extends Component {

    render() { 
      AOS.init();
        return (
            <div className = "contact-body">
              <Grid className="contact-grid">
                <Cell data-aos="fade-right" data-aos-duration="1500" col={6}>
                  <h2>Bryant Zhou</h2>
                  <img
                    src= {Me}
                    alt="avatar"
                    style={{height:'250px'}}
                    className="avatar-img"
                   />
                </Cell>
                <Cell data-aos="fade-left" data-aos-duration="1500" col={6}>
                  <h2>Contact me</h2>
                  <hr/>
                  <div className='contact-list'>
                <List className="theList">
                  <ListItem>
                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton',color:"white", marginTop:'3.5rem'}}>
                     <img className="phone" src={Phone} alt="phone"/>
                    (804)821-8762</ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton',color:"white", margin:'auto'}}>
                    <img className="email" src={Email} alt="email"/>
                     tianyz8@illinois.edu</ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton',color:"white"}}>
                    <img className="facebook" src={Facebook} alt="facebook"/>
                       Bryant Zhou</ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{fontSize:'30px',fontFamily:'Anton',color:"white"}}>
                    <img className="ins" src={Ins} alt="ins"/>
                       bryant_zhou</ListItemContent>
                  </ListItem>
                </List>
                  </div>
                </Cell>
              </Grid>
            </div>
        );
    }
}
 
export default Contact;