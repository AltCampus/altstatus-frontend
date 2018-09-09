import React, { Component } from 'react';
import Header from './Header';
import DailyUpdateForm from './DailyUpdateForm';
import DailyUpdate from './DailyUpdate';

class Dashboard extends Component {
  render() {
    return (
			<div className="primary-wrapper">
				<Header />
				<DailyUpdateForm />
				<DailyUpdate />
				<DailyUpdate />
			</div>
    );
  }
}

export default Dashboard;