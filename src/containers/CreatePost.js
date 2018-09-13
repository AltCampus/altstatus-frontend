import { connect } from 'react-redux';
import DailyUpdateForm from '../components/DailyUpdateForm';
import { changePostTwitterURL, changePostMediumURL, changePostReflection, submitPost } from '../actions';

const mapStateToProps = (state) => {
  const { twitterUrl, mediumUrl, reflection, loading } = state.createPost;
  return {
    twitterUrl,
    mediumUrl,
    reflection,
    loading,
  }
}

const DailyUpdate = connect(mapStateToProps, {
  changeTwitterUrl: changePostTwitterURL,
  changeReflection: changePostReflection,
  changeMediumUrl: changePostMediumURL,
  submitPost,
})(DailyUpdateForm);

export default DailyUpdate;
