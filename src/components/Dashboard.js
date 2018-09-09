import React, { Component } from 'react';
import Header from './Header';
import DailyUpdateForm from './DailyUpdateForm';

class Dashboard extends Component {
  render() {
    return (
			<div class="primary-wrapper">
				<Header />
				<DailyUpdateForm />
			</div>
    );
  }
}

export default Dashboard;