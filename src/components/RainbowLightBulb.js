import React, { Component } from 'react';

class RainbowLightBulb extends Component {

  state = {
    on: true
  };
 

  handleClick = () => {
    this.setState(({ on }) => ({ on: !on }));
  };
  
  render() { 
    const { on } = this.state;
   

    return (
      <section>
        <h2>RainbowLightBulb</h2>

        <button onClick={this.handleClick} 
          style={{ backgroundColor: on ? 'green' : 'red' }}>
          {on ? 'ON' : 'OFF'}
        </button>

       
      </section>
    );
  }
}
 
export default (RainbowLightBulb);