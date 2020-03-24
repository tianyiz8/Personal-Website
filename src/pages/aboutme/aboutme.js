import React, { Component } from 'react';
import './aboutme.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Grid, Cell} from 'react-mdl';
import Swe from '../../component/picture/swe.png'
import Dragon from '../../component/picture/dragon.png'
import Kobe from '../../component/picture/realkobe.png'
import Naruto from '../../component/picture/naruto.png'
class AboutMe extends Component {

    render() { 
        AOS.init();
        return (
            <div style={{zIndex:'2'}}>
            <Grid className="demo-grid-2">
                <Cell col={6}>
                    <div data-aos="fade-up" data-aos-duration='1500' className="headline">
                        <h1 style={{fontFamily:"Playfair Display, serif", fontSize: '7rem', marginLeft:'10%', marginTop:'-1rem'}} >Hi, I'm Bryant</h1>
                        <h5 style={{color: 'white',fontFamily:"Amiri, serif", marginLeft:'8%', marginTop:'2.5rem'}}>My official name is Tianyi, and I'm a student at UIUC.</h5>
                        <h5 style={{color: 'white',fontFamily:"Amiri, serif", marginLeft:'8%', marginTop:'1.5rem'}}>Studying Econometrics, but on the way to transfer to CS + ECON.</h5>
                        <h5 style={{color: 'white',fontFamily:"Amiri, serif", marginLeft:'8%', marginTop:'3.5rem'}}>I am from Shanghai, China.</h5>
                        <h5 style={{color: 'white',fontFamily:"Amiri, serif", marginLeft:'8%', marginTop:'1.5rem'}}>Basketball enthusiast, and Kobe Bryant is my idol.</h5>
                        <h5 style={{color: 'white',fontFamily:"Amiri, serif", marginLeft:'8%', marginTop:'1.5rem'}}>That's also why I name myself Bryant.</h5>
                        <h5 style={{color: 'white',fontFamily:"Amiri, serif", marginLeft:'8%', marginTop:'3.5rem'}}>Also love working out, and am getting bigger.</h5>
                        <h5 style={{color: 'white',fontFamily:"Amiri, serif", marginLeft:'8%', marginTop:'1.5rem'}}>Naruto and Dragon Ball are my favorite animations!</h5>
                        <h5 style={{color: 'white',fontFamily:"Amiri, serif", marginLeft:'8%', marginTop:'1.5rem'}}>I am looking forward to becoming a software engineer in the future!</h5>
                    </div>
                </Cell>
                <Cell data-aos="fade-up" data-aos-delay="800" data-aos-duration='1500' style={{marginTop:"-2rem"}}col={6}>
                    <div className="firstc" >
                        <img src={Swe} alt="swe"
                            style={{height:"18rem", marginLeft:"5rem", marginTop:"3rem"}} />
                        <img src={Kobe} alt="kobe"
                            style={{height:"18rem", marginLeft:"7rem", marginTop:"3rem"}} />
                    </div>
                    <div className="secondc">
                        <img src={Dragon} alt="dragon"
                            style={{height:"18rem", marginLeft:"5rem",  marginTop:"5rem"}} />
                        <img src={Naruto} alt="naruto"
                            style={{height:"18rem", marginLeft:"7rem",  marginTop:"5rem"}} />
                    </div>
                </Cell>
             </Grid>
            </div>
        );
    }
}
 
export default AboutMe;