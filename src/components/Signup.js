import React, { Component } from 'react';
import LandingPage from './LandingPage';
import SignupForm from './SignupForm';

class App extends Component {
  render() {
    return (
			<LandingPage>
				<SignupForm />
			</LandingPage>
    );
  }
}

export default App;