import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSelectedColor } from './reducers';
import PropTypes from 'prop-types';

class RainbowLightBulb extends Component {

  state = {
    on: true
  };
 
  static propTypes = {
    selectedColor: PropTypes.string
  };


  handleClick = () => {
    this.setState(({ on }) => ({ on: !on }));
  };
  
  render() { 
    const { on } = this.state;
    const { selectedColor } = this.props;
   

    return (
      <section>
        <h2>RainbowLightBulb</h2>

        <button onClick={this.handleClick} 
          style={{ backgroundColor: on ? 'green' : 'red' }}>
          {on ? 'ON' : 'OFF'}
        </button>

        {on &&
          <span style={{ backgroundColor: selectedColor }} className="color">{selectedColor}</span>
        }
       
      </section>
    );
  }
}
 
export default connect(
  state => ({
    selectedColor: getSelectedColor(state)
  })
)(RainbowLightBulb);