import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';


const DailyUpdateForm = (props) => {
  const { twitterUrl, mediumUrl, reflection, loading } = props;
  const disable = (!twitterUrl || !reflection) ? true : false;
  const buttonStyl = disable ? { opacity: 0.4 } : { opacity: 1 };

  return (
    <div className="update-form padding">
      <div className="container">
        <div className="update-form__container">
          <div>
            <legend className="text-center">Tell us what you have done today</legend>
            <div>
              <input
                type="url"
                className="form-control"
                id=""
                placeholder="Twitter Url"
                value={twitterUrl}
                onChange={(e) => {
                  props.changeTwitterUrl(e.target.value)
                }}
              />
              <input
                type="url"
                className="form-control"
                id=""
                placeholder="Blog Url"
                value={mediumUrl}
                onChange={(e) => {
                  props.changeMediumUrl(e.target.value)
                }}
              />
              <textarea
                type="text"
                className="form-control"
                rows="5"
                id=""pl
                aceholder="Reflection"
                value={reflection}
                onChange={(e) => {
                  props.changeReflection(e.target.value);
                }}
              />
            </div>
            <div className="text-right">
              <button
                className="btn btn-primary"
                onClick={props.submitPost}
                disabled={disable}
                style={buttonStyl}
              >
                {loading ? <Loading /> : 'Post my update'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DailyUpdateForm.propTypes = {
  twitterUrl: PropTypes.string,
  mediumUrl: PropTypes.string,
  reflection: PropTypes.string,
  changeTwitterUrl: PropTypes.func,
  changeMediumUrl: PropTypes.func,
  submitPost: PropTypes.func,
  changeReflection: PropTypes.func,
  loading: PropTypes.bool,
};

export default DailyUpdateForm;

