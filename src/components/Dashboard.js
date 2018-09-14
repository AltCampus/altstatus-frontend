import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import DailyUpdateForm from '../containers/CreatePost';
import DailyUpdate from './DailyUpdate';
import Loading from './Loading';

const Dashboard = (props) => {
  const { posts, loading, history } = props;
  return (
    <div className="primary-wrapper">
      <Header history={history} logout={props.logout} />
      <DailyUpdateForm />
      {
        posts.map((post) => {
          return <DailyUpdate post={post} key={post.id} />
        })
      }
      {
        loading ?
        <div className="loader-cont">
          <Loading size={80} />
        </div>
        :
        <div />
      }
    </div>
  )
}

Dashboard.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
  logout: PropTypes.func,
  history: PropTypes.object,
}

export default Dashboard;
