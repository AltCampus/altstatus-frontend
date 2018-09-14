import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
	const { history } = props;

	return (
		<header className="header">
			<div className="container">
				<nav className="navbar">
					<h1 className="nav__brand">Altstatus</h1>
					<div className="nav">
						<div className="notification-bell">
							<img src="assets/notification.png" alt="" />
							<div className="circle" />
						</div>
						<div className="nav__item user">
							<img src="assets/shape.png" alt="" />
						</div>
						<button
							className="btn btn-primary logout-button"
							onClick={() => {
								props.logout(history);
							}}
						>
							Logout
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

Header.propTypes = {
	logout: PropTypes.func,
	history: PropTypes.object,
};

export default Header;