import { connect } from 'react-redux';
import DailyUpdateForm from '../components/DailyUpdateForm';
import { changePostTwitterURL, changePostMediumURL, changePostReflection, submitPost } from '../actions';

const mapStateToProps = (state) => {
  const { twitterUrl, mediumUrl, reflection } = state.createPost;
  console.log(twitterUrl, mediumUrl, reflection);
  return {
    twitterUrl,
    mediumUrl,
    reflection,
  }
}

const DailyUpdate = connect(mapStateToProps, {
  changeTwitterUrl: changePostTwitterURL,
  changeReflection: changePostReflection,
  changeMediumUrl: changePostMediumURL,
  submitPost,
})(DailyUpdateForm);

export default DailyUpdate;
