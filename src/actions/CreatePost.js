import {
  CHANGE_POST_REFLECTION,
  CHANGE_POST_TWITTER_URL,
  CHANGE_POST_MEDIUM_URL,
} from './types';

export const changePostReflection = (value) => {
  return {
    type: CHANGE_POST_REFLECTION,
    value,
  };
};

export const changePostTwitterURL = (value) => {
  return {
    type: CHANGE_POST_TWITTER_URL,
    value,
  };
};

export const changePostMediumURL = (value) => {
  return {
    type: CHANGE_POST_MEDIUM_URL,
    value,
  };
};