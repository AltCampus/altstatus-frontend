import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message }) => {
  return (
    <div className="message-cont">
      <p className="message">{message}</p>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
