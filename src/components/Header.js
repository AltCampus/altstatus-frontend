import React, { Component } from 'react';

class Header extends Component {
  render() {
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
						</div>
					</nav>
				</div>
			</header>
    );
  }
}

export default Header;