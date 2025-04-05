import React from "react";

const SigninForm = () => {
  return (
    <>
      <div className="form-section">
        <form>
          <h1>Sign In</h1>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
