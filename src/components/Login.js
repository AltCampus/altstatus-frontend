import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import AuthWrapper from './AuthWrapper';

const Login = (props) => {
	const { email, password } = props;
	return (
		<AuthWrapper>
			<div className="form-container col-md-6 col-md-offset-3">
				<div className="form-group">
					<div className="">
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
							id=""
							placeholder="Password"
							onChange={(e) => {
                props.changePassword(e.target.value);
              }}
							value={password}
						/>
					</div>
					<button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              props.submitLogin(props.history)
            }}
          >
            Submit
          </button>
				</div>
			</div>
		</AuthWrapper>
	);
}

Login.propTypes = {
	email: PropTypes.string,
	password: PropTypes.string,
	changeEmail: PropTypes.func,
	changePassword: PropTypes.func,
  submitLogin: PropTypes.func,
  history: PropTypes.object,
};

export default withRouter(Login);
