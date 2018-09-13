import React from 'react';
import PropTypes from 'prop-types';
import { formatDate, getTime } from '../utils';

const DailyUpdate = (props) => {
  const { twitter_url, reflection, medium_url, timestamp } = props.post;
  return (
    <div className="update-form padding">
      <div className="container">
        <div className="update-form__container">
          <div className="update-time">
            <p>{formatDate(timestamp)}</p>
            <time>at {getTime(timestamp)}</time>
          </div>
          <div className="update-url">
            <a href={twitter_url}>{twitter_url}</a>
            <a href={medium_url}>{medium_url}</a>
          </div>
          <div className="update-reflection">
            <p>{reflection}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

DailyUpdate.propTypes = {
  post: PropTypes.object,
}

export default DailyUpdate;
