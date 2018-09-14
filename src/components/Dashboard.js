import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import DailyUpdateForm from '../containers/CreatePost';
import DailyUpdate from './DailyUpdate';
import Loading from './Loading';
import Message from './Message';

const Dashboard = (props) => {
  const { posts, loading } = props;
  return (
    <div className="primary-wrapper">
      <Header logout={props.logout} />
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
      {
        !posts.length ?
          <Message message="You have no posts." />
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
}

export default Dashboard;
