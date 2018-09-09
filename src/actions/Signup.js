export const changeSignupName = (value) => {
  return {
    type: CHANGE_SIGNUP_NAME,
    value,
  };
};

export const changeSignupEmail = (value) => {
  return {
    type: CHANGE_SIGNUP_EMAIL,
    value,
  };
};

export const changeSignupPassword = (value) => {
  return {
    type: CHANGE_SINGUP_PASSWORD,
    value,
  };
};

export const changeSignupBatch = (value) => {
  return {
    type: CHANGE_SINGUP_BATCH,
    value,
  };
};
