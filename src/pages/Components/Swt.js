import React, { Component } from 'react';
import SwitchControl from 'components/Switch';
class Swt extends Component {
  state = {
    defaultSwitch: false,
     
  }

  render() {
    let {
      defaultSwitch,
      // number = this.props
    } = this.state;

    return (
      // <div className="row">
        <div className="col-md-12">
          
           <div className="col-md-4">
             
            <SwitchControl 
              value={defaultSwitch}
              onChange={value => this.setState({defaultSwitch: value})} />
          </div> 
          
          </div> 
         
          
           
      // </div>
    );
  }
}

export default Swt;