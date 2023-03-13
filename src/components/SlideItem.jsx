import React from 'react'
import PropTypes from 'prop-types';
function SlideItem({children}) {
  return (
      <div className='slider-item'>{children}</div>
  )
}

SlideItem.prototype = {
    children: PropTypes.node.isRequired
}

export default SlideItem