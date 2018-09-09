import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
			<header class="header">
				<div class="container">
					<nav class="navbar">
						<h1 class="nav__brand">Altstatus</h1>
						<div class="nav">
							<div class="notification-bell">
								<img src="assets/notification.png" alt="" />
								<div class="circle" />
							</div>
							<div class="nav__item user">
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