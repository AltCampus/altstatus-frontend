import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

import AuthWrapper from './AuthWrapper';

const Login = (props) => {
	const { email, password, loading, error } = props;
	const buttonClasses = loading ? 'btn btn-primary center-elements' : 'btn btn-primary';
	const disabled = (!email || !password) ? true : false;
	const disableStyl = disabled ? { opacity: 0.4 } : { opacity: 1 };
	
	return (
		<AuthWrapper login>
			<div className="form-container col-md-6 col-md-offset-3" style={{ float: 'none' }}>
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
					<div>
						{
							error ? <p className="auth-error">{error}</p> : <div />
						}
					</div>
					<button
            type="submit"
            className={buttonClasses}
            onClick={() => {
              props.submitLogin(props.history)
						}}
						disabled={disabled}
						style={disableStyl}
          >
            { loading ? <Loading /> : 'Submit' }
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
	loading: PropTypes.bool,
	error: PropTypes.string,
};

export default Login;
