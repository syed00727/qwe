import React, { Component } from 'react';
import SwitchControl from 'components/Switch';
import Swt from './Swt';
class Switches extends Component {
  state = {
    defaultSwitch: false,
    plainSwitch: false,
    iconSwitch: true
  }

  render() {
    let {
      defaultSwitch,
      plainSwitch,
      iconSwitch
    } = this.state;

    return (

      <div className="row">
        <p>Switch 1</p>
        <Swt/>  
        <p>Switch 2</p>
        <Swt/>   
        <p>Switch 3</p>
        <Swt/> 
      </div>
    );
  }
}

export default Switches;