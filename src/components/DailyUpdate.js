import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
			<div className="update-form padding">
				<div className="container">
					<div className="update-form__container">
						<div className="update-time">
							<p>09 Sept 2018</p>
							<time>at 17:30</time>
						</div>
						<div className="update-url">
							<a href="">https://twitter.com/suraj_122/status/1027607709426696192</a>
							<a href="">https://medium.com/@suraj122/road-map-for-a-front-end-developer-911d8ffbe8cd</a>
						</div>
						<div className="update-reflection">
							<p>Have you ever wondered how the websites are laid out, how the designs are implemented through coding, the way a buttons works in webpage? I never paid attention to these questions, before I stepped into the field of web development and these all were complicated for me.</p>
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default Dashboard;