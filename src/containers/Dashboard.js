import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setUserInfo, fetchPosts, logout } from '../actions';
import DashboardView from '../components/Dashboard';

class FetchPosts extends Component {
  componentDidMount() {
    this.props.setUserInfo();
    this.props.fetchPosts();
  }

  render() {
    return (
      <DashboardView {...this.props} />
    )
  }
}

FetchPosts.propTypes = {
  setUserInfo: PropTypes.func,
  fetchPosts: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
  }
};

const Dashboard = connect(mapStateToProps, {
  setUserInfo,
  fetchPosts,
  logout,
})(FetchPosts);

export default Dashboard;


