import React from 'react'
import PropTypes from 'prop-types';
import { SliderFunc } from '../lib/Slider';
function Slider({ children, duration,currentItem, onClick}) {
    React.useEffect(() => {
        setTimeout(() => {
            SliderFunc();
        }, 2000);
     
    }, [])
    
  return (
      <div className='slider' duration={duration?duration:4000} current={currentItem?currentItem:0} onClick={onClick}>{ children}</div>
  )
}

Slider.prototype = {
    children: PropTypes.node.isRequired
}

export default Slider