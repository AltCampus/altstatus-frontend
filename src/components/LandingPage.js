import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';


class LandingPage extends Component {
  render() {
    return (
      <div className="heading">
      	<section className="primary-wrapper padding">
					<div className="container">
						<h1 className="text-center brand">AltStatus</h1>
						<h2 className="hero-tag"> For daily update join, a part<br /> of <span>AltCampus</span></h2>
						{this.props.children || <SignupForm />}
					</div>
				</section>
      </div>
    );
  }
}

LandingPage.propTypes = {
	children: PropTypes.element,
}
export default LandingPage;