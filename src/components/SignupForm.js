import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import Loading from './Loading';

const SignupForm = (props) => {
  const { name, email, password, batch, confirmPassword, history, error, loading } = props;
  const buttonClasses = loading ? 'btn btn-primary center-elements' : 'btn btn-primary';
  const disabled = (!email || !password || !name) ? true : false;
  const disableStyl = disabled ? { opacity: 0.4 } : { opacity: 1 };
  
  return (
    <div className="form-container col-md-6 col-md-offset-3" style={{ float: 'none' }}>
      <div className="form-group">
        <div className="">
          <input
            type="text"
            className="form-control"
            id=""
            placeholder="Your Name"
            value={name}
            onChange={(e) => {
              props.changeName(e.target.value);
            }}
          />
          <input
            type="email"
            className="form-control"
            id=""
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              props.changeEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              props.changePassword(e.target.value);
            }}
          />
          <input
            type="password"
            className="form-control"
            id="confirm-pwd"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              props.changeConfirmPassword(e.target.value);
            }}
          />
          <select
            className="form-control select"
            onChange={(e) => {
              props.changeBatch(e.target.value);
            }}
            value={batch}
          >
            <option value="Batch">Batch</option>
            <option value="Batch1">Batch1</option>
            <option value="Batch2">Batch2</option>
          </select>
        </div>
        <div>
          {
            error ? <p className="auth-error">{error}</p> : <div />
          }
        </div>
        <button
          className={buttonClasses}
          onClick={() => {
            props.submitSignup(history)
          }}
          disabled={disabled}
          style={disableStyl}
        >
          { loading ? <Loading /> : 'Submit' }
        </button>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  changeBatch: PropTypes.func,
  changeConfirmPassword: PropTypes.func,
  changePassword: PropTypes.func,
  changeEmail: PropTypes.func,
  changeName: PropTypes.func,
  name: PropTypes.string,
  confirmPassword: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  batch: PropTypes.string,
  submitSignup: PropTypes.func,
  history: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default withRouter(SignupForm);
