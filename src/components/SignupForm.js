import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

const SignupForm = (props) => {
  const { name, email, password, batch, confirmPassword, history } = props;
  return (
    <div className="form-container col-md-6 col-md-offset-3">
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
        <button
          className="btn btn-primary"
          onClick={() => {
            props.submitSignup(history)
          }}
        >
          Submit
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
};

export default withRouter(SignupForm);
