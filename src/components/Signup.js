import React, { Component } from 'react';

import AuthWrapper from './AuthWrapper';
import SignupForm from './SignupForm';

const Signup = (props) => {
  return (
    <AuthWrapper>
      <SignupForm {...props} />
    </AuthWrapper>
  );
};

export default Signup;
