import React, { Component } from 'react';
import LoginSignup from './LoginSignup';


class App extends Component {
  render() {
    return (
      <div className="heading">
      	<section class="primary-wrapper padding">
					<div class="container">
						<h1 class="text-center brand">AltStatus</h1>
						<h2 class="hero-tag"> For daily update join, a part<br /> of <span>AltCampus</span></h2>
						<LoginSignup />
					</div>
				</section>
      </div>
    );
  }
}

export default App;