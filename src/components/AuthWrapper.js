import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from '../containers/Signup';

const AuthWrapper = (props) => {
	return (
		<div className="heading">
			<section className="primary-wrapper padding">
				<div className="container">
					<h1 className="text-center brand">AltStatus</h1>
					<h2 className="hero-tag"> For daily update join, a part<br /> of <span>AltCampus</span></h2>
					{props.children || <SignupForm {...props} />}
				</div>
			</section>
		</div>
	);
}

AuthWrapper.propTypes = {
	children: PropTypes.element,
}
export default AuthWrapper;
