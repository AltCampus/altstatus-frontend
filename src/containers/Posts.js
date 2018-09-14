import { connect } from 'react-redux';
import PostsView from '../components/Posts';

const mapStateToProps = (state) => {
  console.log(state.user);
  return {
    posts: state.posts.posts,
  };
};

const Posts = connect(mapStateToProps)(PostsView);

export default Posts;
