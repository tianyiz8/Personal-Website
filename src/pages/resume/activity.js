import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Activity extends Component {
    render() {
        return(
            <div style={{height:'1rem', marginBottom: '0rem', marginTop:'-2rem', color: 'white'}}>
            <Grid>
              <Cell col={8}>
                <h6 style={{ marginBottom: '.1rem', fontWeight:'bold',textAlign:"left"}}>{this.props.place}</h6>
                <h6 style={{marginTop:'0rem',marginBottom: '0rem', fontFamily:'italic',textAlign:"left"}}>{this.props.position}</h6>
              </Cell>
              <Cell col={4}>
                <h6 style= {{ marginBottom:'.5rem', fontWeight:'bold', textAlign:"right"}}>{this.props.address}</h6>
                <h6 style={{marginTop:'0rem', fontFamily:'italic',textAlign:"right"}}>{this.props.time}</h6>
              </Cell>
            </Grid>
            </div>
        )
    }
}
export default Activity;