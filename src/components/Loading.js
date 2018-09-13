import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ size }) => {
  const styl = {
    height: size,
    width: size,
  };
  
  return (
    <div className="loader" style={styl} />
  )
};

Loading.propTypes = {
  size: PropTypes.number,
}

export default Loading;