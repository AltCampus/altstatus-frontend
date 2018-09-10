import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import DailyUpdateForm from '../containers/CreatePost';
import DailyUpdate from './DailyUpdate';

const Dashboard = (props) => {
  const { posts } = props;
  return (
    <div className="primary-wrapper">
      <Header />
      <DailyUpdateForm />
      {
        posts.map((post) => {
          return <DailyUpdate post={post} key={post.id} />
        })
      }
    </div>
  )
}

Dashboard.propTypes = {
  posts: PropTypes.array,
}

export default Dashboard;
