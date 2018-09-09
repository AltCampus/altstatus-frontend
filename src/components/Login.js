import React, { Component } from 'react';
import LandingPage from './LandingPage';

class App extends Component {
  render() {
    return (
			<LandingPage>
				<div className="form-container col-md-6 col-md-offset-3">
					<form className="form-group">
						<div className="">
							<input type="email" className="form-control" id="" placeholder="Your Email"/>
							<input type="password" className="form-control" id="" placeholder="Password"/>
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</LandingPage>
    );
  }
}

export default App;