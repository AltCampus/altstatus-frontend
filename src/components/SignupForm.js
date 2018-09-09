import React from 'react';

const SignupForm = () => {
  return (
    <div className="form-container col-md-6 col-md-offset-3">
      <form className="form-group">
        <div className="">
          <input type="text" className="form-control" id="" placeholder="Your Name"/>
          <input type="email" className="form-control" id="" placeholder="Your Email"/>
          <input type="password" className="form-control" id="pwd" placeholder="Password"/>
          <input type="password" className="form-control" id="confirm-pwd" placeholder="Confirm Password"/>
          <select className="form-control select">
            <option value="Batch">Batch</option>
            <option value="Batch1">Batch1</option>
            <option value="Batch2">Batch2</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SignupForm;