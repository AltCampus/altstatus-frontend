import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SignupForm from '../containers/Signup';

const AuthWrapper = (props) => {
	return (
		<div className="heading">
			<section className="primary-wrapper padding">
				<div className="container">
					<h1 className="text-center brand">AltStatus</h1>
					<h2 className="hero-tag">Daily Update for Students</h2>
					{props.children || <SignupForm {...props} />}
					{!props.login ?
						<div className="text-center login-link-cont">Or<a className="login-link" onClick={() => {
								props.history.push('/login');
							}}>Log in</a>
						</div>
						:
						<div className="text-center login-link-cont">Or<a className="login-link" onClick={() => {
								props.history.push('/');
							}}>Sign up</a>
						</div>
					}
				</div>
			</section>
		</div>
	);
}

AuthWrapper.propTypes = {
	children: PropTypes.element,
	history: PropTypes.object,
	login: PropTypes.bool,
}
export default withRouter(AuthWrapper);
